import { defineVitestConfig } from '@nuxt/test-utils/config'

/**
 * Vitest 配置文件
 *
 * 這個配置文件設定了測試環境和選項：
 * - test.environment: 使用 'nuxt' 環境來模擬 Nuxt 應用
 * - test.globals: 啟用全局測試 API（describe, it, expect 等）
 * - test.coverage: 設定代碼覆蓋率追蹤
 */
export default defineVitestConfig({
  test: {
    // 使用 Nuxt 測試環境，提供 Nuxt 特定的功能
    environment: 'nuxt',

    // 啟用全局測試 API，不需要在每個測試文件中 import
    globals: true,

    // 設定環境配置
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom', // 使用輕量級的 DOM 模擬
      },
    },

    // 代碼覆蓋率設定
    coverage: {
      provider: 'v8', // 使用 V8 引擎的覆蓋率工具
      reporter: ['text', 'html', 'json-summary'], // 輸出格式
      exclude: [
        'node_modules/**',
        '.nuxt/**',
        'dist/**',
        '**/*.config.*',
        '**/mockData/**',
        '**/*.d.ts',
      ],
      // 覆蓋率門檻（建議隨著測試增加逐步提高）
      // 目前設定較低的門檻，隨著添加更多測試可以提高到 80%+
      thresholds: {
        lines: 40,      // 行覆蓋率至少 40%
        functions: 0,   // 函數覆蓋率（暫時不設限）
        branches: 0,    // 分支覆蓋率（暫時不設限）
        statements: 40, // 語句覆蓋率至少 40%
      },
    },
  },
})
