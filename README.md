
# nodejs-mstdnlogin

これはマストドンインスタンスの認証に関するサンプルプログラムです。

## 前準備
`./index.js` 内の以下の部分に適切な値を設定してください。
また、リダイレクトURIに `REDIRECT_URI` の値が含まれている必要があります。

```
const INSTANCE = '';
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REDIRECT_URI = 'http://localhost:3000/authorize';
```

![](https://raw.githubusercontent.com/rbtnn/nodejs-mstdnlogin/main/setting.png)

## 実行方法

```
npm install
npm run start
```
