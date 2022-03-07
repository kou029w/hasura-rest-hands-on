# GraphQLによるデータの挿入と取得

GraphQLによるデータの操作を行ってみましょう。

コンソールのトップ画面に戻ると、GraphiQL (GraphQLのプレイグラウンド、開発環境) を使ってGraphQL APIを実際に試すことが可能です。

![](https://lh3.googleusercontent.com/ygTdByArh1HC1hmh_Eq76ExXmcy0bq2k2y4uBgS3Gdqs7VPb9SjsjuPa_vB5o55Wt69yswx-UHHbjhLdQLH0Cnd2zLMKIWU8wKpQ_zPXmpKki6H5ugVg8B7qDwfY2qnZthheXM-h9w=w1280)

## データの挿入

まずGraphQLでデータを挿入してみます。ここでは例として `pages` テーブルに次のデータを書き込みます。

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

問題なくデータが得られたでしょうか。
別のデータも試してみましょう。

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

![](https://lh3.googleusercontent.com/jJ11PeUPl-HOu38_Om5KSwm0WguYTopL9Gw1SXX7x9RxRfiBfNNp9Su6FtzzEwsQGZNm8HUX76McMs1YfuhnU9tJWgZoJfpma7_Zk8U2SaOgizNV-G4TA4eKIE5yR5cglZai43It2g=w1280)

レスポンスを見ると問題なく `id` (ページの識別子) が得られており、正しく割り当てられているようですね。
問題なくテーブル内に書き込まれているようです。

実際にデータベースのテーブルに書き込まれていることを確認してみます。[Data Manager] > [View Database] > `pages` テーブルを選択すると[Browse Rows]パネルでテーブル内のデータを確認することが可能です。

![](https://lh3.googleusercontent.com/2ExXahoxvOy25dwNkM8YhlVdlo_3T5kjqGDSRzDfV2O3TV3gjK2F03zp_ewSuafsH_nyS0voOsX5G6uahxSgNRp-BpYpQSCFE36v85D_sEaSnfMcGwPnQMI7kWqsV0X1aUAQhnUgqg=w1280)

先ほどのGraphQL Queryリクエストが問題なく発行され、正しくデータが書き込まれていますね。

## データの取得

続いて、`pages` テーブルのデータを取得してみます。

![](https://lh3.googleusercontent.com/WE8Pqbr0M-RwfGTxoq8uPyZcLkjppcP_g5HVGastYV_pr7Q_mYB9svilyeTRF7G0WK7g4Xgi19AgamY-8h9xuo_05AKb5r96dtiJJpWe7IX7aJjCs9fBssMxhAZUfDA1OsJ1NZ_Yvw=w1280)

次のGraphQL Queryを書き、リクエストを行います。

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

このとき、引数の `id` として、データに割り当てられた `id` を使います。

| 項目      | 説明           | 例               |
| --------- | -------------- | ---------------- |
| `id`      | ページの識別子 | `2`              |
| `content` | ページの本文   | `{hey: "hello"}` |

レスポンスを見ると、問題なく先ほど書き込まれたのテーブル内データが得られていますね。

このようにして、HasuraではGraphQLを使って簡単にデータベースのデータを操作できます。
リクエストヘッダーに秘密鍵を与えれば、実際にGraphQL APIエンドポイントとして利用することもできます。

また、実際にはここで紹介した以外にもさまざまな操作を行うことが可能です。GraphiQLの[Explorer]パネルから実行可能な操作や型を参照してみると、実際の操作の参考になるかと思います。
あるいは、右側の[Docs]パネルからGraphQLの型の詳細を参照してみてください。
