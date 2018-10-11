# Monday.com 日本語化 Chrome プラグイン

Alpha版。 実用性は低いです。

## インストール

[開発者モード](https://qiita.com/suin/items/2b31079056f1356257cb#2-chrome%E3%82%92%E9%96%8B%E7%99%BA%E8%80%85%E3%83%A2%E3%83%BC%E3%83%89%E3%81%AB%E3%81%97%E3%81%A6%E6%8B%A1%E5%BC%B5%E3%82%92%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%82%80) で、clone した manifest.json を読み込む。

<img width="1427" alt="screenshot" src="https://user-images.githubusercontent.com/203797/46783879-ef4d9f00-cd66-11e8-98cf-965e1dc3a37a.png">


## 開発

`src/` 以下を監視し、変更があれば `build/` へ
```sh
yarn watch
```