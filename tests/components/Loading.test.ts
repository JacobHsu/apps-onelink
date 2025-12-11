/**
 * Loading 組件測試
 *
 * 這個測試文件示範如何測試 Vue 組件
 *
 * 測試重點：
 * 1. 組件能否正確渲染
 * 2. HTML 結構是否正確
 * 3. CSS 類別是否正確應用
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Loading from '~/components/Base/Loading.vue'

/**
 * 組件測試套件
 */
describe('Loading.vue', () => {
  /**
   * 測試組件是否能成功渲染
   */
  it('應該成功渲染組件', () => {
    // Arrange & Act: 使用 mount 掛載組件
    // mount() 會創建一個組件實例並返回 wrapper 對象
    const wrapper = mount(Loading)

    // Assert: 驗證組件存在
    expect(wrapper.exists()).toBe(true)
  })

  /**
   * 測試 SVG 元素是否存在
   */
  it('應該包含 SVG 元素', () => {
    // Arrange & Act
    const wrapper = mount(Loading)

    // Assert: 查找 SVG 元素
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  /**
   * 測試旋轉動畫的 CSS 類別
   */
  it('應該有 animate-spin 類別', () => {
    // Arrange & Act
    const wrapper = mount(Loading)

    // Assert: 驗證 SVG 有旋轉動畫類別
    const svg = wrapper.find('svg')
    expect(svg.classes()).toContain('animate-spin')
  })

  /**
   * 測試 SVG 的屬性
   */
  it('SVG 應該有正確的屬性', () => {
    // Arrange & Act
    const wrapper = mount(Loading)
    const svg = wrapper.find('svg')

    // Assert: 驗證 SVG 屬性
    expect(svg.attributes('xmlns')).toBe('http://www.w3.org/2000/svg')
    expect(svg.attributes('fill')).toBe('none')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  /**
   * 測試 SVG 內部結構
   */
  it('應該包含 circle 和 path 元素', () => {
    // Arrange & Act
    const wrapper = mount(Loading)

    // Assert: 驗證內部元素存在
    expect(wrapper.find('circle').exists()).toBe(true)
    expect(wrapper.find('path').exists()).toBe(true)
  })

  /**
   * 測試 circle 元素的屬性
   */
  it('circle 元素應該有正確的屬性', () => {
    // Arrange & Act
    const wrapper = mount(Loading)
    const circle = wrapper.find('circle')

    // Assert: 驗證 circle 的屬性
    expect(circle.classes()).toContain('opacity-25')
    expect(circle.attributes('cx')).toBe('12')
    expect(circle.attributes('cy')).toBe('12')
    expect(circle.attributes('r')).toBe('10')
    expect(circle.attributes('stroke')).toBe('currentColor')
    expect(circle.attributes('stroke-width')).toBe('4')
  })

  /**
   * 測試 path 元素的屬性
   */
  it('path 元素應該有正確的屬性', () => {
    // Arrange & Act
    const wrapper = mount(Loading)
    const path = wrapper.find('path')

    // Assert: 驗證 path 的屬性
    expect(path.classes()).toContain('opacity-75')
    expect(path.attributes('fill')).toBe('currentColor')
    expect(path.attributes('d')).toBeDefined()
  })

  /**
   * 快照測試（Snapshot Testing）
   *
   * 快照測試會保存組件的 HTML 輸出，之後的測試會與快照比較
   * 如果輸出改變，測試會失敗，提醒你檢查是否為預期的改變
   */
  it('應該與快照匹配', () => {
    // Arrange & Act
    const wrapper = mount(Loading)

    // Assert: 比對快照
    expect(wrapper.html()).toMatchSnapshot()
  })

  /**
   * 組件測試最佳實踐：
   *
   * 1. 測試用戶可見的行為，而非實現細節
   *    - ✅ 測試：組件是否渲染正確的內容
   *    - ❌ 避免：測試內部狀態的實現方式
   *
   * 2. 使用 mount() 進行完整渲染
   *    - mount: 完整渲染組件及其子組件
   *    - shallowMount: 只渲染當前組件（子組件用 stub 替代）
   *
   * 3. 清理測試環境
   *    - 每個測試後自動清理（Vitest 會自動處理）
   *
   * 4. 測試可訪問性（Accessibility）
   *    - 確保組件對輔助技術友好
   */
})
