# Discord Roblox Lua Bot

Roblox Luaスクリプト検索・AI支援Discord Bot

## 機能

- `!search_スクリプト名` — ScriptBloxからスクリプト検索
- `/search` — スラッシュコマンドで検索（フィルター付き）
- `/latest` — 最新スクリプト一覧
- `/hub` — Script Hub専用検索
- `/obfuscate` — Luaコード難読化
- `/deobfuscate` — 難読化コードの解読
- `/explain` — スクリプトの日本語解説
- `/fix` — バグ修正
- `/aichat` — AIに質問
- `/aiset` / `/aioff` — AI自動応答のオン/オフ
- `/keyinfo` — Keyシステム情報確認
- `/status` — Bot状態確認
- 新着スクリプト自動通知（2分おき）

## Railway デプロイ手順

### 1. Railway にサインイン
[railway.app](https://railway.app) でアカウント作成 or ログイン

### 2. 新規プロジェクト作成
- `New Project` → `Deploy from GitHub repo` → このリポジトリを選択

### 3. 環境変数を設定
Railway のプロジェクト設定 → `Variables` に以下を追加:

| 変数名 | 説明 |
|--------|------|
| `DISCORD_BOT_TOKEN` | Discord Developer Portal のBotトークン |
| `GROQ_API_KEY` | Groq API キー |
| `GEMINI_API_KEY` | Google Gemini API キー |
| `GITHUB_TOKEN` | GitHub Personal Access Token（任意） |

### 4. デプロイ
環境変数を設定後、自動でビルド・起動します。

## 対応サーバー・チャンネル

- サーバーID: `1490495338296115364`
- 検索チャンネル: `1510354846111371377`
- AIチャンネル: `1511176152964923493`
- 通知チャンネル: `1511170667414818857`

## 技術スタック

- Node.js + TypeScript
- discord.js v14
- Groq SDK (llama-3.3-70b)
- Google Gemini 1.5 Flash
- ScriptBlox API
