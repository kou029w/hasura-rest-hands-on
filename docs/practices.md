# 実践的な機能

## 認証

認証には、Webhookを介する方法とJWTを介する方法があります。

より詳しい情報は、[公式ドキュメント](https://hasura.io/docs/latest/graphql/core/auth/index.html) を参照してください。

## CORSの設定

応答ヘッダーには、デフォルトで `Access-Control-Allow-Origin: *` ヘッダーが含まれており、外部からのアクセスをすべて許可しています。
適宜セキュリティ要件に合わせて設定することを推奨します。

より詳しい情報は、[公式ドキュメント](https://hasura.io/docs/latest/graphql/core/deployment/graphql-engine-flags/config-examples.html#id1) を参照してください。
