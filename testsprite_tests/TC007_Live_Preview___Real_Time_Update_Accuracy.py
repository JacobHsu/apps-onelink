import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # Input new text into the Name and Category fields to test live preview update.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div/div[2]/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('Test User')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div/div[2]/div/div/div[2]/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('Technology')
        

        # Add a social media link or edit an existing one and verify if the live preview updates accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[3]/div[2]/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('https://twitter.com/testuser')
        

        # Add a custom link or modify existing custom links and check if live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Input new custom link label and URL, then verify if live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('Test Custom Link')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div/div/div/div/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('https://customlink.com/test')
        

        # Edit the custom link label and URL, then verify live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('Updated Custom Link')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div/div/div/div/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('https://updatedcustomlink.com')
        

        # Delete the updated custom link and verify if the live preview removes it instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Try deleting the custom link again or delete another link and verify if the live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Edit a social media link and then delete it, verifying if live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[3]/div[2]/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('https://editedsociallink.com')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[3]/div[2]/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Attempt to delete another custom link or social media link and verify if live preview updates instantly and accurately.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div/div[5]/div[2]/div/div[3]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Assert live preview updates immediately and displays the new profile data correctly.
        frame = context.pages[-1]
        name_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//span[contains(text(), "Test User")]').count()
        assert name_preview > 0, "Live preview does not show updated name 'Test User'"
        category_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//span[contains(text(), "Technology")]').count()
        assert category_preview > 0, "Live preview does not show updated category 'Technology'"
        # Confirm live preview updates accurately to match social links changes.
        social_link_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//a[contains(@href, "https://twitter.com/testuser")]').count()
        assert social_link_preview > 0, "Live preview does not show updated social link 'https://twitter.com/testuser'"
        # Verify live preview reflects the custom links changes instantaneously without errors.
        custom_link_label_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//a[contains(text(), "Updated Custom Link")]').count()
        assert custom_link_label_preview > 0, "Live preview does not show updated custom link label 'Updated Custom Link'"
        custom_link_url_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//a[contains(@href, "https://updatedcustomlink.com")]').count()
        assert custom_link_url_preview > 0, "Live preview does not show updated custom link URL 'https://updatedcustomlink.com'"
        # Verify the deleted custom link is removed from live preview.
        deleted_custom_link_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//a[contains(text(), "Test Custom Link")]').count()
        assert deleted_custom_link_preview == 0, "Live preview still shows deleted custom link 'Test Custom Link'"
        # Verify the deleted social media link is removed from live preview.
        deleted_social_link_preview = await frame.locator('xpath=//div[contains(@class, "live-preview")]//a[contains(@href, "https://editedsociallink.com")]').count()
        assert deleted_social_link_preview == 0, "Live preview still shows deleted social link 'https://editedsociallink.com'"
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    