/**
 * Profile 組件測試
 *
 * 這個測試示範如何測試：
 * 1. Props 傳遞和顯示
 * 2. v-model 模式（update:xxx 事件）
 * 3. 用戶輸入互動
 * 4. 事件發出（emit）
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Profile from '~/components/AppForm/Profile.vue'

describe('Profile.vue', () => {
  /**
   * 測試 1: 基本渲染
   */
  it('應該成功渲染組件', () => {
    const wrapper = mount(Profile)
    expect(wrapper.exists()).toBe(true)
  })

  /**
   * 測試 2: 測試 Props - name
   * 這會覆蓋 :value="name" 這行代碼
   */
  it('應該顯示 name prop 的值', () => {
    // Arrange: 傳入 name prop
    const wrapper = mount(Profile, {
      props: {
        name: '我的應用'
      }
    })

    // Act: 找到 name input 元素
    const nameInput = wrapper.find('input[name="name"]')

    // Assert: 驗證 value 屬性
    expect(nameInput.element.value).toBe('我的應用')
  })

  /**
   * 測試 3: 測試 Props - desc
   * 這會覆蓋 :value="desc" 這行代碼
   */
  it('應該顯示 desc prop 的值', () => {
    // Arrange
    const wrapper = mount(Profile, {
      props: {
        desc: '教育類應用'
      }
    })

    // Act
    const categoryInput = wrapper.find('input[name="category"]')

    // Assert
    expect(categoryInput.element.value).toBe('教育類應用')
  })

  /**
   * 測試 4: 測試用戶輸入 - Name
   * 這會覆蓋第 19 行的 @input 事件 ✅
   */
  it('當用戶輸入 name 時應該發出 update:name 事件', async () => {
    // Arrange
    const wrapper = mount(Profile, {
      props: {
        name: ''
      }
    })

    // Act: 找到 input 並模擬用戶輸入
    const nameInput = wrapper.find('input[name="name"]')
    await nameInput.setValue('新的應用名稱')

    // Assert: 驗證事件被發出，且參數正確
    expect(wrapper.emitted('update:name')).toBeTruthy()
    expect(wrapper.emitted('update:name')[0]).toEqual(['新的應用名稱'])
  })

  /**
   * 測試 5: 測試用戶輸入 - Category
   * 這會覆蓋第 35 行的 @input 事件 ✅
   */
  it('當用戶輸入 category 時應該發出 update:desc 事件', async () => {
    // Arrange
    const wrapper = mount(Profile, {
      props: {
        desc: ''
      }
    })

    // Act: 模擬用戶在 category input 中輸入
    const categoryInput = wrapper.find('input[name="category"]')
    await categoryInput.setValue('生產力工具')

    // Assert: 驗證 update:desc 事件被正確發出
    expect(wrapper.emitted('update:desc')).toBeTruthy()
    expect(wrapper.emitted('update:desc')[0]).toEqual(['生產力工具'])
  })

  /**
   * 測試 6: 測試同時傳遞多個 props
   */
  it('應該同時顯示所有 props', () => {
    // Arrange
    const props = {
      name: 'ChatGPT',
      desc: 'AI 助手',
      image: 'https://example.com/logo.png'
    }

    // Act
    const wrapper = mount(Profile, {
      props
    })

    // Assert
    expect(wrapper.find('input[name="name"]').element.value).toBe('ChatGPT')
    expect(wrapper.find('input[name="category"]').element.value).toBe('AI 助手')
  })

  /**
   * 測試 7: 測試 input 的屬性
   */
  it('name input 應該有正確的屬性', () => {
    const wrapper = mount(Profile)
    const nameInput = wrapper.find('input[name="name"]')

    // 驗證各種 HTML 屬性
    expect(nameInput.attributes('type')).toBe('text')
    expect(nameInput.attributes('id')).toBe('name')
    expect(nameInput.attributes('autocomplete')).toBe('given-name')
  })

  /**
   * 測試 8: 測試 category input 的最大長度
   */
  it('category input 應該有 maxlength 限制', () => {
    const wrapper = mount(Profile)
    const categoryInput = wrapper.find('input[name="category"]')

    expect(categoryInput.attributes('maxlength')).toBe('100')
  })

  /**
   * 測試 9: 測試 label 文字
   */
  it('應該顯示正確的 label 文字', () => {
    const wrapper = mount(Profile)

    const labels = wrapper.findAll('label')
    expect(labels[0].text()).toBe('Name')
    expect(labels[1].text()).toBe('Category')
  })

  /**
   * 測試 10: 測試多次輸入
   * 模擬用戶反覆修改內容
   */
  it('應該處理多次輸入事件', async () => {
    // Arrange
    const wrapper = mount(Profile, {
      props: { name: '' }
    })

    const nameInput = wrapper.find('input[name="name"]')

    // Act: 模擬用戶多次修改
    await nameInput.setValue('第一次輸入')
    await nameInput.setValue('第二次輸入')
    await nameInput.setValue('第三次輸入')

    // Assert: 驗證事件被發出 3 次
    expect(wrapper.emitted('update:name')).toHaveLength(3)
    expect(wrapper.emitted('update:name')[0]).toEqual(['第一次輸入'])
    expect(wrapper.emitted('update:name')[1]).toEqual(['第二次輸入'])
    expect(wrapper.emitted('update:name')[2]).toEqual(['第三次輸入'])
  })

  /**
   * 測試 11: 測試 CSS 類別
   */
  it('應該有正確的樣式類別', () => {
    const wrapper = mount(Profile)

    // 驗證容器有正確的 Tailwind 類別
    const container = wrapper.find('.shadow')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('shadow')
    expect(container.classes()).toContain('sm:overflow-hidden')
  })

  /**
   * 測試 12: 快照測試
   */
  it('應該與快照匹配', () => {
    const wrapper = mount(Profile, {
      props: {
        name: '測試應用',
        desc: '測試類別'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  /**
   * 重要學習點：
   *
   * 1. 測試 v-model 模式
   *    - 使用 setValue() 模擬用戶輸入
   *    - 驗證 update:xxx 事件被發出
   *    - 檢查事件參數是否正確
   *
   * 2. 測試輸入元素
   *    - 使用 find('input[name="xxx"]') 精確定位
   *    - element.value 獲取輸入值
   *    - attributes() 檢查 HTML 屬性
   *
   * 3. 測試用戶互動
   *    - setValue() 模擬輸入
   *    - trigger('click') 模擬點擊
   *    - 使用 async/await 等待 DOM 更新
   *
   * 4. emitted() 驗證事件
   *    - emitted('event-name') 檢查事件是否發出
   *    - emitted('event-name')[0] 獲取第一次發出的參數
   *    - toHaveLength() 檢查發出次數
   */
})
