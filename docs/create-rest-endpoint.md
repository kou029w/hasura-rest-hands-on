# REST APIエンドポイントの作成

![](https://lh3.googleusercontent.com/WpWX9e0zMECBpUvdyFXyPAxKauwgpNVAwGSLzjt3M99aeL9t90CrqZrdpEf39uh5SKPBeYvfMX0i6KvTuXf39_rccK1o7aohwFL_OCmz0TX-i0Lc2tlJpk5gPMdTrEqzKyElKvPzEQ=w1280)

get page
GET page/:id

```graphql
query getPage($id: Int!) {
  page: pages_by_pk(id: $id) {
    id
    content
  }
}
```

![](https://lh3.googleusercontent.com/fKkiNL4nWYUtiG8OfAk8mhTxdJuZQclLLBWheVclr4EcC7ggsZzpI4mTYGQ-6pvWZWApa2acaUJKVjOFy5oHwqhtVfn4arYX01B29yUvOQwWPRIq-6JOBFNTfP_FxoNJNRaseYEMbw=w1280)

![](https://lh3.googleusercontent.com/yeEU1sF7DR3VA7tWn-FDofpFIfK93q2hssqnn25c_-0bnAbo8WdzdTahQ3HVst7hCniT5hJqHgWS9Pu9zTQorHxErtdp8PSFJmgsU6R0G_oPzF__Up-aSdHQWFc_uuWyVU_Ux50jlw=w1280)

put page
PUT page/:id

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

![](https://lh3.googleusercontent.com/NUKkifFtbdjjti9tga3fHp0-iIc4e48Cz2HrBOUngbaDad5an29hJ9ucn7kG3MXLIyZw80wpfG3aZZrS9kDEYUnl9cV3VB0oZ6LqIRKbHlgUGBF2PJJC9ifLCABZhmn1Rv8u9mZ8qw=w1280)
