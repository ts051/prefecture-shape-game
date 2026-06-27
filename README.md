# 県かたちスケッチ

スマホのブラウザで遊ぶ、都道府県シルエットのフリーハンド描画クイズです。

## 起動

```powershell
cd C:\Users\masam\r_app\prefecture-shape-game
C:\Users\masam\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 4173
```

PCでは次を開きます。

```text
http://127.0.0.1:4173/
```

Tailscaleでスマホから見る場合は、PCのTailscale IPまたはMagicDNS名を使って次の形で開きます。

```text
http://<PCのTailscale IPまたは名前>:4173/
```

## GitHub Pages

GitHub Pagesでは、このリポジトリのルートをそのまま公開します。

```text
https://<GitHubユーザー名>.github.io/prefecture-shape-game/
```

## データ

- `data/prefectures-lite.json`: ゲームで読み込む軽量な都道府県形状データ
- `data/japan.geojson`: 再生成用の元データ
- `scripts/build-prefectures.js`: 元データから軽量データを作り直すスクリプト
