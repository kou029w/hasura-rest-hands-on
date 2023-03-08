# Vueアプリケーションの作成

[![Edit on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/kou029w/hasura-rest-hands-on/tree/main/frontend?terminal=dev&file=src/App.vue)
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/kou029w/hasura-rest-hands-on/tree/main/frontend?file=/src/App.vue)

いずれかのリンクにアクセスし、Vueアプリケーションを作成します。

```vue
<!-- src/App.vue -->
{{#include ../frontend/src/App.vue}}
```

ローカル環境で作成する場合は、StackBlitzにアクセスし、左の[Project]パネルから[↓ (Download Project)]ボタンを押すと、ソースコード一式をダウンロードできます。ダウンロードしたZIPファイルを展開後、`npm install` コマンドなどで必要なパッケージを導入することで同様にVueアプリケーションを作成できます。

ソースコードの中には、HasuraのREST APIのエンドポイントURLが含まれます。そのURLに含まれるドメイン名の部分の `memo-demo` は、Hasura Cloudプロジェクト名です。プロジェクトによって異なるので、自分の作成したプロジェクトに合わせて書き換えましょう。

```js
// src/App.vue
{{#include ../frontend/src/App.vue:13:15}}
```

このエンドポイントURLを自分の作成したプロジェクトのものに書き換えると完成です。

Hasuraを使用してPostgresデータベースに接続したREST APIを構築し、それを利用したWebアプリを作成できました 🎉

Hasuraのコンソールにアクセスすると、実際にデータが更新されていることを確認できます。

![](https://lh3.googleusercontent.com/twteosRUkmMlBoa8PXU3UXC9umek-TzQ1kwOWZIShW7fKvW_4tVtG7B3Ue-olldhxh05x1JTFtt_Oxn2nLxcDPEGBv32bkE2zjpqL7heEjV54jkDgYqOm1tEq02qvnKoqu5yaSKRZA=w800)
