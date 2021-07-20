# GraphQLによるデータの挿入と取得

HasuraからGraphQLによるデータへの操作を行ってみましょう。

コンソールのトップ画面に戻ると、GraphiQL (GraphQLのプレイグラウンド、開発環境) を使ってGraphQL APIを実際に試すことが可能です。

## データの挿入

まずGraphQLでデータの挿入を試します。ここでは例として `pages` テーブルに次のデータを書き込みます。

| 項目      | 説明         | 値                      |
| --------- | ------------ | ----------------------- |
| `content` | ページの本文 | `{}` - 空のオブジェクト |

GraphQL Queryとしては次のコードを書いて、▶ ボタンからリクエストを行います。

<!-- prettier-ignore-start -->
```graphql
mutation MyMutation {
  insert_pages_one(object: {content: {}}) {
    id
    content
  }
}
```
<!-- prettier-ignore-end -->

サーバーにリクエストを発行しレスポンスボディとして得られたデータは、右側のパネルに表示されます。

![](https://lh3.googleusercontent.com/ygTdByArh1HC1hmh_Eq76ExXmcy0bq2k2y4uBgS3Gdqs7VPb9SjsjuPa_vB5o55Wt69yswx-UHHbjhLdQLH0Cnd2zLMKIWU8wKpQ_zPXmpKki6H5ugVg8B7qDwfY2qnZthheXM-h9w=w1280)

問題無くJSONのデータが得られたら、別のデータの書き込みを試してみます。

例として `pages` テーブルに次のデータを書き込みます。

| 項目      | 説明         | 値               |
| --------- | ------------ | ---------------- |
| `content` | ページの本文 | `{hey: "hello"}` |

<!-- prettier-ignore-start -->
```graphql
mutation MyMutation {
  insert_pages_one(object: {content: {hey: "hello!"}}) {
    id
    content
  }
}
```
<!-- prettier-ignore-end -->

レスポンスを見ると問題なく `id` (ページの識別子) が得られており、正しく割り当てられ、テーブル内に書き込まれているようですね。

![](https://lh3.googleusercontent.com/jJ11PeUPl-HOu38_Om5KSwm0WguYTopL9Gw1SXX7x9RxRfiBfNNp9Su6FtzzEwsQGZNm8HUX76McMs1YfuhnU9tJWgZoJfpma7_Zk8U2SaOgizNV-G4TA4eKIE5yR5cglZai43It2g=w1280)

実際にデータベースのテーブルに書き込まれていることを確認してみます。[Data Manager] > [View Database] > `pages` テーブルを選択すると[Browse Rows]パネルでテーブル内のデータを確認することが可能です。

先ほどのGraphQL Queryリクエストが問題なく発行され、正しくデータが書き込まれていますね。

![](https://lh3.googleusercontent.com/2ExXahoxvOy25dwNkM8YhlVdlo_3T5kjqGDSRzDfV2O3TV3gjK2F03zp_ewSuafsH_nyS0voOsX5G6uahxSgNRp-BpYpQSCFE36v85D_sEaSnfMcGwPnQMI7kWqsV0X1aUAQhnUgqg=w1280)

## データの取得

上述の `pages` テーブル内からGraphQLでデータの取得を試します。取得するために、データに割り当てられた `id` を使います。

GraphQL Queryとしては次のコードを書いて、▶ ボタンからリクエストを行います。

<!-- prettier-ignore-start -->
```graphql
query MyQuery {
  pages_by_pk(id: 2) {
    id
    content
  }
}
```
<!-- prettier-ignore-end -->

レスポンスを見ると、問題なく先ほど書き込まれたのテーブル内データが得られていますね。

| 項目      | 説明           | 例               |
| --------- | -------------- | ---------------- |
| `id`      | ページの識別子 | `2`              |
| `content` | ページの本文   | `{hey: "hello"}` |

![](https://lh3.googleusercontent.com/WE8Pqbr0M-RwfGTxoq8uPyZcLkjppcP_g5HVGastYV_pr7Q_mYB9svilyeTRF7G0WK7g4Xgi19AgamY-8h9xuo_05AKb5r96dtiJJpWe7IX7aJjCs9fBssMxhAZUfDA1OsJ1NZ_Yvw=w1280)

GraphQLでデータの挿入と取得を実際に試してみて、いかがでしたか。

このハンズオンではGraphQLの具体的なオペレーション `mutation` や `query`、Hasuraの提供しているデータのCRUDのためのフィールド `insert_*` や `*_by_pk` について詳しくは説明しません。しかし実際にはここで紹介した以外にもさまざまな操作を行うことが可能です。[Explorer]のパネルから実行可能な操作や型、あるいは右側の[< Docs]等からGraphQLの型の詳細を参照してみると、実際の操作の参考になるかと思います。
