# 測試目錄說明

這個目錄包含專案的所有測試文件。

## 目錄結構

```
tests/
├── unit/              # 單元測試
│   └── useAppData.test.ts     # useAppData composable 的測試
├── components/        # 組件測試
│   ├── Loading.test.ts        # Loading 組件的測試
│   └── FormSection.test.ts    # FormSection 組件的測試
└── README.md         # 本文件
```

## 快速開始

```bash
# 安裝依賴（如果還沒安裝）
pnpm install

# 運行所有測試
pnpm test

# 運行測試一次（不監聽）
pnpm test:run

# 查看測試覆蓋率
pnpm test:coverage

# 使用 UI 界面運行測試
pnpm test:ui
```

## 測試文件命名規則

- 單元測試: `[檔案名].test.ts`
- 組件測試: `[組件名].test.ts`
- 測試文件應該和被測試的文件有相同的名稱

## 撰寫新測試

### 1. 建立測試文件

根據測試類型選擇合適的目錄：

- **Composables / Utils**: 放在 `tests/unit/`
- **Vue Components**: 放在 `tests/components/`

### 2. 基本測試結構

```typescript
import { describe, it, expect } from 'vitest'

describe('測試套件名稱', () => {
  it('測試案例描述', () => {
    // Arrange: 準備測試數據
    // Act: 執行要測試的功能
    // Assert: 驗證結果
    expect(actual).toBe(expected)
  })
})
```

### 3. 參考現有範例

查看 `tests/unit/useAppData.test.ts` 和 `tests/components/` 中的文件，
了解如何撰寫不同類型的測試。

## 測試覆蓋率目標

- **Lines**: 60%+
- **Functions**: 60%+
- **Branches**: 50%+
- **Statements**: 60%+

隨著專案成熟，建議逐步提高到 80% 以上。

## 更多資訊

詳細的測試指南請參閱：[TESTING_GUIDE.md](../TESTING_GUIDE.md)
