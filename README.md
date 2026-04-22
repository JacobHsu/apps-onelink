# Onelink — App 整理工具

> 將常用 App 與網站連結整理成一頁式分享頁，掃碼即達，免註冊。

![Screenshot](https://github.com/user-attachments/assets/e879eae9-7fcc-4a45-afc1-6cba67df0ec7)

[![Deploy](https://github.com/JacobHsu/apps-onelink/actions/workflows/deploy.yml/badge.svg)](https://github.com/JacobHsu/apps-onelink/actions/workflows/deploy.yml)
[![Tests](https://github.com/JacobHsu/apps-onelink/actions/workflows/test.yml/badge.svg)](https://github.com/JacobHsu/apps-onelink/actions/workflows/test.yml)

[Website](https://jacobhsu.github.io/apps-onelink/) ·
[Slidev](https://jacobhsu.github.io/apps-onelink/slides/)

---

## 功能特色

| 功能 | 說明 |
|------|------|
| 即時預覽 | 表單調整同步呈現在手機預覽區 |
| 拖放排序 | 自訂 App 卡片順序與顯示數量 |
| 8 大場景模板 | AI · Language · Habit · Information · Crypto · Fitness · TV · Tools |
| 社群連結 | 預設常用平台圖示，維持品牌一致性 |
| 免註冊 | 所有資料保存在 URL 中，無需帳號 |

## 技術架構

- **[Nuxt 3](https://nuxt.com/)** — 靜態生成 (`nuxt generate`)，部署至 GitHub Pages
- **[TailwindCSS](https://tailwindcss.com/)** — 原子化 CSS
- **[@nuxt/icon](https://github.com/nuxt/icon)** — 按需載入 icon，減少 bundle 體積
- **[vuedraggable](https://github.com/SortableJS/vue.draggable.next)** — App 卡片拖放排序
- **[@vueuse/nuxt](https://vueuse.org/)** — Vue 組合式工具集
- **[Vitest](https://vitest.dev/)** — 組件單元測試 + composable 測試

## 本地開發

確認已安裝 [pnpm](https://pnpm.io/)：

```bash
pnpm install
```

啟動開發伺服器（預設 http://localhost:3000）：

```bash
pnpm dev
```

執行測試：

```bash
pnpm test          # 監看模式
pnpm test:run      # 單次執行
pnpm test:coverage # 覆蓋率報告
```

## 靜態部署

產生靜態檔案：

```bash
BASE_URL=/apps-onelink/ pnpm generate
```

本地預覽：

```bash
pnpm preview
```

推送至 `main` 分支後，GitHub Actions 自動建置並部署至 GitHub Pages。

## Slidev 簡報

投影片原始碼位於 [`slidev/`](./slidev/) 目錄：

```bash
cd slidev
pnpm install
pnpm dev     # http://localhost:3030
pnpm build   # 輸出至 slidev/dist/
```

## References

- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Iconify — ph icon set](https://icon-sets.iconify.design/ph/)
- [Slidev Docs](https://sli.dev/)
