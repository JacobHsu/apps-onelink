# CLAUDE.md

專案協作指引，供 Claude Code 在協助開發時遵守。

---

## PR 工作流程

每當出現需要修改程式碼的任務，依照以下順序進行：

### 1. 開 Issue

在 GitHub 建立 Issue，描述：
- 問題是什麼
- 數據或證據（如 Lighthouse 分數、錯誤訊息）
- 根本原因
- 預期解決方案

參考格式：[docs/issue.md](docs/issue.md)

```bash
gh issue create --title "perf: ..." --body "..."
```

### 2. 建立 Branch

從 Issue 編號建立 branch：

```bash
git checkout -b fix/<issue-number>-<簡短描述>
# 例：git checkout -b fix/7-nuxt-icon-on-demand
```

### 3. 實作修改

- 小步驟進行，每個 commit 只做一件事
- Commit 格式：`<type>: <描述>`

### 4. 開 PR

```bash
gh pr create --title "..." --body "Closes #<issue-number>"
```

PR 內容必須主動說明，不等使用者詢問：
- **為什麼這樣改**（根本原因，例如：舊套件設計問題、規格限制）
- **改了什麼**（具體變更項目）
- **效果數據**（改前/改後對比，例如 bundle 大小、分數）
- **如何測試**（驗證步驟）

---

## 分支命名規則

```
fix/<issue-number>-<描述>     # 修復 bug 或效能問題
feat/<issue-number>-<描述>    # 新功能
chore/<issue-number>-<描述>   # 維護性工作
```
