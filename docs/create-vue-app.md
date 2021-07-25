# Vueアプリケーションの作成

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/kou029w/hasura-rest-hands-on/tree/main/frontend?file=/src/App.vue)

このリンクからCodeSandboxにアクセスし、Vueアプリケーションを作成します。

なお、URLに含まれる `memo-demo` は、Hasura Cloudプロジェクト名によって異なるので、適宜自分の作成したプロジェクトに合わせて読み替えてください。

```vue
{{#include ../frontend/src/App.vue}}
```

![](https://lh3.googleusercontent.com/Z6UJraog11NnBg8lhyrAcdWRhfTEjTbOMv2kRLGTDzJF-d28Bn4MN7W-kymVztsbMa5SGXx8qS-NQoKF9o_pu2UlI9FJyS4AljIEOcJMULEsic-jk5TbOHtBF0eCerbGaQAcxb45qw=w1280)

![](https://lh3.googleusercontent.com/WYpxLUGM52BZ0m5cQ_ZsEjfljdwLbaFkN47XTKp0Z9BPsDPhVImcR3rt9oWop-59ABCF2ubfsQOw2yyZAoT1GIkcjnZ4DCReg5Qn22pyOVT6DblipYIg3S0OZekcCziKxX9Fc6x_BA=w1280)

Hasuraのコンソールにアクセスすると、実際にデータが更新されていることを確認することが可能です。

![](https://lh3.googleusercontent.com/twteosRUkmMlBoa8PXU3UXC9umek-TzQ1kwOWZIShW7fKvW_4tVtG7B3Ue-olldhxh05x1JTFtt_Oxn2nLxcDPEGBv32bkE2zjpqL7heEjV54jkDgYqOm1tEq02qvnKoqu5yaSKRZA=w800)

Hasuraを使用してPostgresデータベースに接続したREST APIを構築し、それを利用したWebアプリを作成しました。いかがでしたか。

このハンズオンは以上です。もし質問や提案、問題などあれば[GitHub Issues](https://github.com/kou029w/hasura-rest-hands-on/issues/new)にてお気軽にご報告ください。
