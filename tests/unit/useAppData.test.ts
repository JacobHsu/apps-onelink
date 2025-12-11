/**
 * useAppData Composable 單元測試
 *
 * 這個測試文件示範如何測試 Vue composable（組合式函數）
 *
 * 測試重點：
 * 1. 驗證函數返回的數據結構
 * 2. 檢查數據的完整性和正確性
 * 3. 確保類型定義正確
 */

import { describe, it, expect } from 'vitest'
import { useAppData } from '~/composables/useAppData'

/**
 * describe: 定義測試套件（Test Suite）
 * - 第一個參數是套件名稱，描述正在測試什麼
 * - 第二個參數是包含所有相關測試的函數
 */
describe('useAppData', () => {
  /**
   * it 或 test: 定義單個測試案例（Test Case）
   * - 第一個參數描述測試的目的（應該以「should」開頭）
   * - 第二個參數是執行測試的函數
   */
  it('應該返回包含 demoData 的對象', () => {
    // Arrange（準備）: 設置測試所需的數據和環境
    const { demoData } = useAppData()

    // Assert（斷言）: 驗證結果是否符合預期
    expect(demoData).toBeDefined() // 檢查 demoData 存在
    expect(typeof demoData).toBe('object') // 檢查是物件類型
  })

  it('應該包含所有預期的類別', () => {
    // Arrange: 準備測試數據
    const { demoData } = useAppData()
    const expectedCategories = [
      'education',
      'productivity',
      'news',
      'ai',
      'finance',
      'health',
      'tv',
      'tools'
    ]

    // Assert: 驗證所有類別都存在
    expectedCategories.forEach(category => {
      expect(demoData[category]).toBeDefined()
      expect(demoData[category]).toHaveProperty('n') // 名稱
      expect(demoData[category]).toHaveProperty('d') // 描述
      expect(demoData[category]).toHaveProperty('i') // 圖標
      expect(demoData[category]).toHaveProperty('apps') // 應用列表
      expect(demoData[category]).toHaveProperty('ls') // 社交連結
    })
  })

  it('教育類別應該包含應用列表', () => {
    // Arrange
    const { demoData } = useAppData()
    const educationCategory = demoData.education

    // Assert: 驗證教育類別的數據
    expect(educationCategory.apps).toBeInstanceOf(Array) // 確保是陣列
    expect(educationCategory.apps.length).toBeGreaterThan(0) // 至少有一個應用

    // 驗證第一個應用的結構
    const firstApp = educationCategory.apps[0]
    expect(firstApp).toHaveProperty('name')
    expect(firstApp).toHaveProperty('logo')
    expect(firstApp).toHaveProperty('url')

    // 驗證數據類型
    expect(typeof firstApp.name).toBe('string')
    expect(typeof firstApp.logo).toBe('string')
    expect(typeof firstApp.url).toBe('string')
  })

  it('社交連結應該有正確的屬性', () => {
    // Arrange
    const { demoData } = useAppData()
    const educationCategory = demoData.education

    // Assert: 驗證社交連結的結構
    expect(educationCategory.ls).toBeInstanceOf(Array)

    if (educationCategory.ls.length > 0) {
      const firstLink = educationCategory.ls[0]
      expect(firstLink).toHaveProperty('l') // Label
      expect(firstLink).toHaveProperty('i') // Icon
      expect(firstLink).toHaveProperty('u') // URL
    }
  })

  it('AI 類別應該包含 ChatGPT', () => {
    // Arrange
    const { demoData } = useAppData()
    const aiCategory = demoData.ai

    // Act: 查找 ChatGPT 應用
    const chatGPT = aiCategory.apps.find(app => app.name === 'ChatGPT')

    // Assert: 驗證 ChatGPT 存在且有正確數據
    expect(chatGPT).toBeDefined()
    expect(chatGPT?.url).toContain('apps.apple.com')
    expect(chatGPT?.logo).toBeTruthy() // 確保有 logo URL
  })

  it('所有 URL 應該是有效的格式', () => {
    // Arrange
    const { demoData } = useAppData()

    // Act & Assert: 遍歷所有類別和應用，驗證 URL 格式
    Object.values(demoData).forEach(category => {
      category.apps.forEach(app => {
        // URL 應該以 http:// 或 https:// 開頭
        expect(app.url).toMatch(/^https?:\/\//)
      })
    })
  })

  /**
   * 測試最佳實踐總結：
   *
   * 1. AAA 模式（Arrange-Act-Assert）
   *    - Arrange: 準備測試數據
   *    - Act: 執行被測試的函數
   *    - Assert: 驗證結果
   *
   * 2. 每個測試只測一件事
   *    - 測試應該專注且獨立
   *    - 測試名稱應該清楚說明測試目的
   *
   * 3. 使用描述性的測試名稱
   *    - 使用「應該...」的格式
   *    - 讓其他開發者一看就知道測試的目的
   *
   * 4. 測試邊界情況和異常
   *    - 不只測試正常情況
   *    - 也要測試空值、錯誤輸入等
   */
})
