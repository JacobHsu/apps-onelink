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
        # Click on 'Add AI data' button to select the AI demo template.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add Education data' button to select the Education demo template.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add Finance data' button to select the Finance demo template.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add News data' button to select the News demo template and verify form fields and live preview.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add Productivity data' button to select the Productivity demo template.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[5]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add Health data' button to select the Health demo template.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[6]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Add Tools data' button to select the Tools demo template and verify form fields and live preview.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/div/div[2]/button[7]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify form fields and live preview for AI demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        apps_links = await frame.locator('xpath=//div[contains(text(),"Apps Links")]/following-sibling::div[contains(@class,"apps")]').all_inner_texts()
        assert any("App 1" in app for app in apps_links)
        assert any("App 12" in app for app in apps_links)
        live_preview_labels = await frame.locator('xpath=//div[contains(text(),"Links")]/following-sibling::div[contains(@class,"labels")]').all_inner_texts()
        assert "Add AI data" in live_preview_labels
        # Verify form fields and live preview for Education demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        # Verify form fields and live preview for Finance demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        # Verify form fields and live preview for News demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        # Verify form fields and live preview for Productivity demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        # Verify form fields and live preview for Health demo template
        form_description = await frame.locator('xpath=//div[contains(text(),"Profile")]/following-sibling::div[contains(@class,"description")]').inner_text()
        assert "Some information about apps" in form_description
        # Verify form fields and live preview for Tools demo template
        form_category = await frame.locator('xpath=//div[contains(text(),"Utilities")]/following-sibling::div[contains(@class,"category")]').inner_text()
        assert form_category == "Tools"
        tools_apps = await frame.locator('xpath=//div[contains(text(),"Utilities")]/following-sibling::div[contains(@class,"apps")]//div[contains(@class,"app-name")]').all_inner_texts()
        assert any("Natural Insight Calendar" in app for app in tools_apps)
        assert any("World Clock Master Time Zones" in app for app in tools_apps)
        assert any("Bobby Track Subscriptions" in app for app in tools_apps)
        assert any("Subscription Cancel" in app for app in tools_apps)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    