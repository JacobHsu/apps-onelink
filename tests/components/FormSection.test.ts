/**
 * FormSection 組件測試
 *
 * 這個測試文件示範如何測試帶有 Props 和 Slots 的 Vue 組件
 *
 * 測試重點：
 * 1. Props 傳遞和渲染
 * 2. Slots 內容渲染
 * 3. 響應式網格布局
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormSection from '~/components/Base/FormSection.vue'

describe('FormSection.vue', () => {
  /**
   * 測試基本渲染
   */
  it('應該成功渲染組件', () => {
    // Arrange & Act
    const wrapper = mount(FormSection)

    // Assert
    expect(wrapper.exists()).toBe(true)
  })

  /**
   * 測試 Props - title
   *
   * Props 是父組件傳遞給子組件的數據
   * 使用 mount() 的第二個參數來設置 props
   */
  it('應該正確顯示 title prop', () => {
    // Arrange
    const titleText = '個人資料'

    // Act: 傳遞 props 給組件
    const wrapper = mount(FormSection, {
      props: {
        title: titleText
      }
    })

    // Assert: 驗證 title 是否正確顯示
    const h3 = wrapper.find('h3')
    expect(h3.exists()).toBe(true)
    expect(h3.text()).toBe(titleText)
  })

  /**
   * 測試 Props - description
   */
  it('應該正確顯示 description prop', () => {
    // Arrange
    const descriptionText = '請填寫您的個人資訊'

    // Act
    const wrapper = mount(FormSection, {
      props: {
        description: descriptionText
      }
    })

    // Assert
    const description = wrapper.find('p')
    expect(description.text()).toBe(descriptionText)
  })

  /**
   * 測試同時傳遞多個 Props
   */
  it('應該同時顯示 title 和 description', () => {
    // Arrange
    const props = {
      title: '帳號設定',
      description: '管理您的帳號資訊和偏好設定'
    }

    // Act
    const wrapper = mount(FormSection, {
      props
    })

    // Assert
    expect(wrapper.find('h3').text()).toBe(props.title)
    expect(wrapper.find('p').text()).toBe(props.description)
  })

  /**
   * 測試預設值
   *
   * 組件定義了 props 的預設值為空字串
   * 測試當不傳遞 props 時，組件是否使用預設值
   */
  it('沒有傳遞 props 時應該顯示空內容', () => {
    // Arrange & Act
    const wrapper = mount(FormSection)

    // Assert
    const h3 = wrapper.find('h3')
    const description = wrapper.find('p')

    expect(h3.text()).toBe('')
    expect(description.text()).toBe('')
  })

  /**
   * 測試 Default Slot
   *
   * Slots 允許父組件向子組件傳遞 HTML 內容
   * 使用 mount() 的 slots 選項來測試
   */
  it('應該渲染 default slot 的內容', () => {
    // Arrange
    const slotContent = '<div class="test-content">表單內容</div>'

    // Act: 傳遞 slot 內容
    const wrapper = mount(FormSection, {
      slots: {
        default: slotContent
      }
    })

    // Assert: 驗證 slot 內容是否被渲染
    const slotElement = wrapper.find('.test-content')
    expect(slotElement.exists()).toBe(true)
    expect(slotElement.text()).toBe('表單內容')
  })

  /**
   * 測試 Named Slot - helpertext
   *
   * Named Slots 允許定義多個插槽位置
   */
  it('應該渲染 helpertext slot 的內容', () => {
    // Arrange
    const helperText = '<span class="helper">這是輔助說明</span>'

    // Act
    const wrapper = mount(FormSection, {
      slots: {
        helpertext: helperText
      }
    })

    // Assert
    const helperElement = wrapper.find('.helper')
    expect(helperElement.exists()).toBe(true)
    expect(helperElement.text()).toBe('這是輔助說明')
  })

  /**
   * 測試響應式布局類別
   *
   * 驗證組件是否有正確的 Tailwind CSS 類別
   */
  it('應該有響應式網格布局類別', () => {
    // Arrange & Act
    const wrapper = mount(FormSection)

    // Assert: 找到主容器並檢查類別
    const container = wrapper.find('.md\\:grid')
    expect(container.exists()).toBe(true)

    // 驗證響應式類別
    expect(container.classes()).toContain('md:grid')
    expect(container.classes()).toContain('md:grid-cols-3')
    expect(container.classes()).toContain('md:gap-6')
  })

  /**
   * 測試左側欄位（標題區域）的類別
   */
  it('左側欄位應該有正確的類別', () => {
    // Arrange & Act
    const wrapper = mount(FormSection, {
      props: {
        title: '測試標題'
      }
    })

    // Assert
    const leftColumn = wrapper.find('.md\\:col-span-1')
    expect(leftColumn.exists()).toBe(true)

    // 檢查 sticky 定位
    const stickyDiv = leftColumn.find('.sticky')
    expect(stickyDiv.exists()).toBe(true)
    expect(stickyDiv.classes()).toContain('top-0')
  })

  /**
   * 測試右側欄位（內容區域）的類別
   */
  it('右側欄位應該有正確的類別', () => {
    // Arrange & Act
    const wrapper = mount(FormSection)

    // Assert
    const rightColumn = wrapper.find('.md\\:col-span-2')
    expect(rightColumn.exists()).toBe(true)
    expect(rightColumn.classes()).toContain('mt-5')
    expect(rightColumn.classes()).toContain('md:mt-0')
    expect(rightColumn.classes()).toContain('relative')
  })

  /**
   * 整合測試：測試完整的組件功能
   */
  it('應該同時處理 props 和 slots', () => {
    // Arrange
    const props = {
      title: '社交連結',
      description: '添加您的社交媒體連結'
    }

    const slots = {
      default: '<form class="social-form">表單</form>',
      helpertext: '<small>至少添加一個連結</small>'
    }

    // Act
    const wrapper = mount(FormSection, {
      props,
      slots
    })

    // Assert: 驗證所有內容都正確渲染
    expect(wrapper.find('h3').text()).toBe(props.title)
    expect(wrapper.find('p').text()).toBe(props.description)
    expect(wrapper.find('.social-form').exists()).toBe(true)
    expect(wrapper.find('small').exists()).toBe(true)
  })

  /**
   * 快照測試
   */
  it('應該與快照匹配', () => {
    // Arrange & Act
    const wrapper = mount(FormSection, {
      props: {
        title: '測試標題',
        description: '測試描述'
      },
      slots: {
        default: '<div>內容</div>'
      }
    })

    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  /**
   * Props 和 Slots 測試最佳實踐：
   *
   * 1. Props 測試要點：
   *    - 測試必填和選填 props
   *    - 測試預設值
   *    - 測試類型驗證
   *    - 測試 props 變更時的響應
   *
   * 2. Slots 測試要點：
   *    - 測試 default slot
   *    - 測試 named slots
   *    - 測試 scoped slots（如果有）
   *    - 測試當 slot 為空時的情況
   *
   * 3. 組件集成測試：
   *    - 測試 props 和 slots 一起使用
   *    - 測試不同的 props 組合
   *    - 測試邊界情況
   */
})
