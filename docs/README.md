# Hasuraで作るREST API

[Hasura](https://hasura.io/)を使用してPostgresデータベースに接続したREST APIを構築し、それを利用したWebアプリを作成します。

これからこのハンズオンで作成するのは次のようなWebアプリです。

<iframe
  src="https://stackblitz.com/github/kou029w/hasura-rest-hands-on/tree/main/frontend?embed=1&view=preview&terminal=dev&file=src/App.vue"
  style="
    width: 100%;
    height: 500px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="vue3-hasura-rest"
></iframe>

構成としては下記の通りです。

- [Hasura Cloud](https://cloud.hasura.io/) - すぐに利用可能なHasuraの環境
- [StackBlitz](https://stackblitz.com/) (あるいは、[CodeSandbox](https://codesandbox.io/)) - フロントエンドのオンライン開発環境
- [Vue 3](https://vuejs.org/) - プログレッシブWebフレームワーク
- [Quill](https://quilljs.com/) - リッチテキストエディター

それではさっそく作っていきましょう!
