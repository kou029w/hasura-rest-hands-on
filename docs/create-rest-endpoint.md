# REST APIエンドポイントの作成

ここからは、Hasuraを使ってREST APIエンドポイントを作成し、実際にWebアプリケーションから利用する方法を説明します。

## 設計

HasuraはGraphQL QueryをREST化することが可能です。このハンズオンでは、次の仕様のREST APIエンドポイントを作成します。

| 名称         | HTTPメソッドとパス       | 説明                                                                                                                |
| ------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ページの取得 | `GET /api/rest/page/:id` | 割り当てられた識別子 `id` をもつページを取得します。レスポンスボディには `data.page.content` プロパティを含みます。 |
| ページの更新 | `PUT /api/rest/page/:id` | 割り当てられた識別子 `id` をもつページを更新します。リクエストボディには `content` プロパティを与えます。           |

## 「ページの取得 (`GET page/:id`)」エンドポイントの作成

ページを取得するためのREST APIエンドポイントを作成します。

コンソールのトップ画面のGraphiQLのパネルにアクセスし、次のコードを書きます。

```graphql
query getPage($id: Int!) {
  page: pages_by_pk(id: $id) {
    id
    content
  }
}
```

![](https://lh3.googleusercontent.com/WpWX9e0zMECBpUvdyFXyPAxKauwgpNVAwGSLzjt3M99aeL9t90CrqZrdpEf39uh5SKPBeYvfMX0i6KvTuXf39_rccK1o7aohwFL_OCmz0TX-i0Lc2tlJpk5gPMdTrEqzKyElKvPzEQ=w1280)

[REST]ボタンを選択し、REST APIエンドポイント作成フォームを表示します。次の必要事項を入力し、作成ボタンを選択しエンドポイントを作成します。

| 項目     | 説明                    | 内容       |
| -------- | ----------------------- | ---------- |
| Name     | エンドポイントの名称    | get page   |
| Location | `/api/rest/` 以降のパス | `page/:id` |
| Method   | HTTPメソッド            | `GET`      |

![](https://lh3.googleusercontent.com/fKkiNL4nWYUtiG8OfAk8mhTxdJuZQclLLBWheVclr4EcC7ggsZzpI4mTYGQ-6pvWZWApa2acaUJKVjOFy5oHwqhtVfn4arYX01B29yUvOQwWPRIq-6JOBFNTfP_FxoNJNRaseYEMbw=w1280)

## 「ページの更新 (`PUT page/:id`)」エンドポイントの作成

ページを更新するためのREST APIエンドポイントを作成します。

コンソールのトップ画面のGraphiQLのパネルにアクセスし、次のコードを書きます。

```graphql
mutation putPage($id: Int!, $content: jsonb!) {
  page: insert_pages_one(
    object: { id: $id, content: $content }
    on_conflict: { constraint: pages_pkey, update_columns: content }
  ) {
    id
    content
  }
}
```

![](https://lh3.googleusercontent.com/yeEU1sF7DR3VA7tWn-FDofpFIfK93q2hssqnn25c_-0bnAbo8WdzdTahQ3HVst7hCniT5hJqHgWS9Pu9zTQorHxErtdp8PSFJmgsU6R0G_oPzF__Up-aSdHQWFc_uuWyVU_Ux50jlw=w1280)

[REST]ボタンを選択し、REST APIエンドポイント作成フォームを表示します。次の必要事項を入力し、作成ボタンを選択しエンドポイントを作成します。

| 項目     | 説明                    | 内容       |
| -------- | ----------------------- | ---------- |
| Name     | エンドポイントの名称    | put page   |
| Location | `/api/rest/` 以降のパス | `page/:id` |
| Method   | HTTPメソッド            | `PUT`      |

![](https://lh3.googleusercontent.com/NUKkifFtbdjjti9tga3fHp0-iIc4e48Cz2HrBOUngbaDad5an29hJ9ucn7kG3MXLIyZw80wpfG3aZZrS9kDEYUnl9cV3VB0oZ6LqIRKbHlgUGBF2PJJC9ifLCABZhmn1Rv8u9mZ8qw=w1280)

作成が完了すると作成したREST APIエンドポイントの一覧が表示されます。
