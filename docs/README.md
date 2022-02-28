# Hasuraで作るREST API

[Hasura](https://hasura.io/)を使用してPostgresデータベースに接続したREST APIを構築し、それを利用したWebアプリを作成します。

これからこのハンズオンで作成するのは次のようなWebアプリです。

<iframe
  src="https://codesandbox.io/embed/github/kou029w/hasura-rest-hands-on/tree/main/frontend?codemirror=1&hidenavigation=1&view=preview&module=/src/App.vue"
  style="
    width: 100%;
    height: 500px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="vue3-hasura-rest"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

構成としては下記の通りです。

- [Hasura Cloud](https://cloud.hasura.io/) - すぐに利用可能なHasuraの環境
- [Heroku Postgres](https://jp.heroku.com/postgres) - すぐに利用可能なデータベース
- [CodeSandbox](https://codesandbox.io/) - フロントエンドのオンライン開発環境
- [Vue 3](https://vuejs.org/) - プログレッシブWebフレームワーク
- [Quill](https://quilljs.com/) - リッチテキストエディター

それではさっそく作っていきましょう!
