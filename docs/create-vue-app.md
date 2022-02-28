# Vueアプリケーションの作成

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/kou029w/hasura-rest-hands-on/tree/main/frontend?file=/src/App.vue)

このリンクからCodeSandboxにアクセスし、Vueアプリケーションを作成します。

なお、URLに含まれる `memo-demo` は、Hasura Cloudプロジェクト名によって異なるので、適宜自分の作成したプロジェクトに合わせて読み替えてください。

```vue
{{#include ../frontend/src/App.vue}}
```

Hasuraのコンソールにアクセスすると、実際にデータが更新されていることを確認できます。

![](https://lh3.googleusercontent.com/twteosRUkmMlBoa8PXU3UXC9umek-TzQ1kwOWZIShW7fKvW_4tVtG7B3Ue-olldhxh05x1JTFtt_Oxn2nLxcDPEGBv32bkE2zjpqL7heEjV54jkDgYqOm1tEq02qvnKoqu5yaSKRZA=w800)

Hasuraを使用してPostgresデータベースに接続したREST APIを構築し、それを利用したWebアプリを作成しました。
