# 貢獻指南

感謝願意協助維護 apps-onelink！以下說明如何設定環境、遵循程式風格，以及提交修改。

## 開發環境設定
- 安裝 Node.js 18 以上版本與 pnpm（建議使用 `pnpm@8` 以上）。
- 第一次安裝依賴請執行 `pnpm install --shamefully-hoist`，以與 CI 保持一致。
- 常用指令：
  - `pnpm dev`：啟動本機開發伺服器（預設 http://localhost:3000）。
  - `pnpm build`：建立正式版 bundle。
  - `pnpm preview`：檢查 build 結果。
  - `pnpm generate`：產出靜態快照。
- Nuxt 會自動處理 `pnpm postinstall`，無須手動執行。

## 專案結構與模組分工
- `pages/`：Nuxt 3 路由層級頁面，預設使用 `<script setup>` 與 Composition API。
- `components/AppForm` 與 `components/Base`：共享 UI 與表單邏輯；請將可重用元件放在這裡，避免重複程式碼。
- `public/`：靜態資產。
- `slidev/`：展示簡報素材，僅在更新簡報時調整。
- 產生的輸出（例如 `.nuxt/`, `.output/`）不受版控；不要直接修改。
- 端對端測試與報告放在 `testsprite_tests/`。

## 程式風格與命名約定
- Vue SFC 內採用兩個空白縮排，並保持 `<script setup>` 為預設結構。
- Vue 元件檔名使用 PascalCase（例如 `AppFormProfile.vue`）。
- 在模板中使用元件屬性或事件時改用 kebab-case（例如 `app-form-profile`）。
- JavaScript / TypeScript 字串使用雙引號。
- Tailwind 類別建議採用 mobile-first 排序：layout → spacing → color。
- 尚未設定 lint 指令，請依編輯器或 CI 警示修正，並確保 `pnpm build` 無警告。

## 測試指引
- Playwright 測試位於 `testsprite_tests/*.py`。
- 先啟動開發伺服器，再執行測試，例如：
```bash
python testsprite_tests/TC001_Profile_Management___Update_Profile_Information.py
```
- 新增測試時維持 async 模式，沿用既有共用 helper（共用 timeout、`goto` 流程）。
- 覆蓋率更新時記得調整 `testsprite_tests/testsprite_frontend_test_plan.json`，並於 PR 附上生成的 HTML 報告。

## Commit 與 Pull Request
- Commit 訊息遵循 `type(scope): summary` 格式，例如 `feat(auth): add forgot password flow`，摘要請維持 72 字元內。
- 建立 PR 時請說明使用者影響、連結相關 issue，若有 UI 更新請附上截圖或錄影。
- 指派至少一位審查者，並在 PR 內列出已完成的手動測試。
- 合併前請確認 `pnpm build` 與關鍵 Playwright 測試皆通過。

## 其他注意事項
- 若指引有缺漏或需要更新，歡迎提出 Issue 或 PR 討論。
- 大型變更建議先開 Issue 或 RFC 取得共識後再進行實作。
