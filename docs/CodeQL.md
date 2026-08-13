# CodeQL 弱點掃描

本文件說明如何在本專案啟用 GitHub CodeQL，並確認掃描流程正常運作。

CodeQL 會分析程式碼中的資料流與控制流程，以找出潛在安全弱點。本專案使用 Nuxt 3、Vue 與 TypeScript/JavaScript，可使用 CodeQL 的 `javascript-typescript` 分析器，且不需要修改應用程式碼或安裝額外的 npm 套件。

## 兩種設定方式

GitHub 提供兩種啟用 CodeQL code scanning 的方式：

- **Default setup**：由 GitHub 管理，自動選擇要分析的語言、要執行的查詢套件與觸發掃描的事件，設定步驟最少。
- **Advanced setup**：在 repository 內新增可自訂的 GitHub Actions workflow 檔案，使用 `github/codeql-action` 執行 CodeQL CLI。

若需要以下功能，一般會使用 Advanced setup：

- 自訂觸發分支或執行時機
- 排除特定原始碼目錄
- 使用 `security-extended` 等額外查詢套件
- 使用自架 runner 或其他特殊執行環境

> [!IMPORTANT]
> Default setup 與 Advanced setup 是兩種不同的管理方式，不會同時並存。啟用 Default setup 後，不需要再新增 CodeQL workflow。

## 前置條件

啟用前請確認：

- Repository 已啟用 GitHub Actions。
- 操作者具有 repository 管理權限。
- 公開 repository 可使用 CodeQL code scanning；私有 repository 則需確認所屬組織具有適用的 GitHub Code Security 授權。

## 啟用 Default setup

1. 開啟 GitHub 上的 repository 首頁。
2. 選擇 **Settings**。
3. 在左側選單選擇 **Security → Advanced Security**。
4. 找到 **CodeQL analysis**，選擇 **Set up → Default**。
5. 確認偵測到的語言包含 **JavaScript/TypeScript**。
6. 選擇 **Enable CodeQL**。

啟用後，GitHub 會管理掃描工作，通常會在下列情況執行：

- 對預設分支推送程式碼
- 建立或更新以預設分支為目標的 Pull Request
- GitHub 管理的定期排程

Default setup 由 GitHub 平台代管執行，不會在 repository 的 `.github/workflows/` 中建立可見的 YAML 檔案，這是正常行為。

## 驗證掃描結果

啟用後可依序檢查：

1. 前往 repository 的 **Actions** 頁面，確認 CodeQL 工作已開始或完成。
2. 前往 **Security → Code scanning** 查看分析結果。
3. 開啟任一警示，確認規則、受影響位置、資料流路徑與修正建議。
4. 建立或更新 Pull Request，確認新引入的警示能顯示在 PR 檢查結果中。

首次掃描需要建立分析資料庫，因此通常會比後續掃描花費更多時間。

## 警示處理原則

收到 CodeQL 警示時，建議採用以下流程：

1. 確認警示指出的輸入來源、危險操作與資料流路徑。
2. 判斷問題是否可由外部輸入觸發，不要只依賴警示嚴重度決定優先順序。
3. 優先修正程式碼，並加入能覆蓋該情境的測試。
4. 若確認為誤判，應在 GitHub 中關閉警示並記錄理由。
5. 修正合併後，確認後續掃描已將警示標記為已解決。

不應僅為了讓檢查通過而忽略警示或大範圍排除原始碼。

## Advanced setup 範例

若未來需要客製化掃描，可先停用 Default setup，再建立 `.github/workflows/codeql.yml`：

```yaml
name: CodeQL

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: "17 2 * * 1"

permissions:
  contents: read
  security-events: write

jobs:
  analyze:
    name: Analyze JavaScript and TypeScript
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4
        with:
          languages: javascript-typescript
          build-mode: none

      - name: Analyze
        uses: github/codeql-action/analyze@v4
```

JavaScript/TypeScript 屬於直譯型語言，使用 `build-mode: none` 即可建立 CodeQL 資料庫；此掃描不需要執行 `pnpm install` 或 `pnpm build`。

若要增加偵測範圍，可在 `init` 步驟加入：

```yaml
with:
  languages: javascript-typescript
  build-mode: none
  queries: security-extended
```

`security-extended` 可能產生更多需要人工判讀的警示，導入前應先評估團隊的處理能力。

## 與其他安全檢查的關係

CodeQL 是靜態應用程式安全測試（SAST），主要分析本專案撰寫的程式碼。它不會取代以下機制：

| 機制 | 用途 |
|------|------|
| Dependabot alerts | 偵測第三方套件的已知弱點 |
| Dependency review | 檢查 Pull Request 新增或更新的依賴風險 |
| Secret scanning | 偵測意外提交的 token、金鑰與憑證 |
| 單元與端對端測試 | 驗證功能與行為是否符合預期 |

建議將上述工具與 CodeQL 搭配使用，而不是將 CodeQL 視為單一安全防線。

## 疑難排解

### 找不到 CodeQL 設定選項

確認目前帳號具有管理權限、GitHub Actions 已啟用，並檢查私有 repository 的 GitHub Code Security 授權。

### Actions 成功但沒有警示

沒有警示通常表示目前使用的查詢沒有發現問題，不代表應用程式不存在任何安全風險。仍應維持依賴掃描、秘密掃描、安全審查與測試。

### Pull Request 無法上傳分析結果

從 fork 建立的 Pull Request 可能受到 `GITHUB_TOKEN` 權限限制。Advanced setup 應保持最小權限，並避免使用 `pull_request_target` 執行不受信任的 PR 程式碼。

### 掃描時間過長

先檢查是否重複啟用了 Default setup 與 Advanced setup。若採 Advanced setup，再評估是否需要使用 CodeQL 設定檔排除不屬於產品原始碼的目錄。

## 參考資料

- [Configuring default setup for code scanning](https://docs.github.com/en/code-security/how-tos/scan-code-for-vulnerabilities/configure-code-scanning/configuring-default-setup-for-code-scanning)
- [Workflow configuration options for code scanning](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options)
- [CodeQL Action](https://github.com/github/codeql-action)
- [About code scanning with CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)
