# 実践的な機能

## 認証

認証には、Webhookを介する方法とJWTを介する方法があります。

より詳しい情報は、[公式ドキュメント](https://hasura.io/docs/latest/auth/index/) や、公式チュートリアルを参照してください。

- [Hasura GraphQL チュートリアル](https://hasura.io/learn/graphql/hasura/introduction/)
- [Hasura GraphQL チュートリアル (日本語版)](https://hasura.io/learn/ja/graphql/hasura/introduction/)

## CORS (Cross-Origin Resource Sharing) の設定

応答ヘッダーには、デフォルトで `Access-Control-Allow-Origin: *` ヘッダーが含まれており、外部からのアクセスをすべて許可しています。
適宜セキュリティ要件に合わせて設定することを推奨します。

より詳しい情報は、[公式ドキュメント](https://hasura.io/docs/latest/deployment/graphql-engine-flags/config-examples/#configure-cors) を参照してください。
