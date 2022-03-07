# アクセス権の設定

アクセス権の設定を行います。Hasuraはテーブルの行単位でアクセス制御を行うことが可能です。このハンズオンでは秘密鍵を持たずとも誰でもREST APIを利用できるようにします。

**注: セキュアではないので本番環境ではJWK等で認証しましょう**

[Data Manager] > [View Database] > `pages` テーブル > [Permissions]パネルから、テーブル内のデータのアクセス件を設定可能です。

認証・認可していない利用者のために、ここでは例として `anonymous` ロールを割り当てます。

![](https://lh3.googleusercontent.com/Uq0iRyw6DlL5jbIMpL9xEpC-4tX1S-RZSIyFM4uCbTQAXD6nWy8l7Y7QLv0Akq4dKKzD88Tyn1rZfW7bDSI2Y_RRV55upoQBIPmvwvvsK-vo8A9q4y1Ys5Zw9dEmU366_uxRr-hBrg=w1280)

## insert (データの挿入) 権限の設定

`anonymous` ロールの行 > insert の列を選択し、データの挿入の権限の設定を行います。

下記の項目を選択し、[Save Permissions]ボタンで権限を保存します。

- Row insert permissions > Without any checks
- Column insert permissions > `id` `content` ([Toggle All]ボタンを押す)

![](https://lh3.googleusercontent.com/IqvuzDGhNd8qYoFVlmJxjbP2iUQnz1V93jk4fGOv62QjJMpvMRS5LGOpaCoiJljIDdNqLqCII3J8b4yXx2IuAzAe0EBK9BkGaMq4MYn_NPOe2naCF9T_Vhz5csmH8dPDDCFQNDBnMw=w1280)

## select (データの取得) 権限の設定

`anonymous` ロールの行 > select の列を選択し、データの取得の権限の設定を行います。

下記の項目を選択し、[Save Permissions]ボタンで権限を保存します。

- Row select permissions > Without any checks
- Column select permissions > `id` `content` ([Toggle All]ボタンを押す)

![](https://lh3.googleusercontent.com/ZbyxyVmmbqOtKD5sJsCeD_iG8v5qP_iYbFHM6PDfsFTNtdVmAfkXd9kzB8i_ZMLqDVbJguI0GS1aHmSj_7kgL3x-AyPth6x0WhEQQyb5JWgiU2sAzRAL_rjXNIkWQLHYn1T8p1o_Mg=w1280)

## update (データの更新) 権限の設定

`anonymous` ロールの行 > update の列を選択し、データの取得の権限の設定を行います。

下記の項目を選択し、[Save Permissions]ボタンで権限を保存します。

- Pre-update check > Without any checks
- Post-update check > Without any checks
- Column update permissions > `id` `content` ([Toggle All]ボタンを押す)

![](https://lh3.googleusercontent.com/kD9ZrdOSbLuWZ-i8Z_e9NyHcNX3y05RaC3Wf9TQv80TY7kWctQ0yrpPF2Xj1tx4nKrRgLNwzYsMc9zjQEh5MiqNHvXOQGipQ6L0NkVU-S8KmDM7zdJM78ZxeEfG52bWza32HYux47g=w1280)

`anonymous` ロールのinsert、select、updateに✅マークが入っていれば完了です。

![](https://lh3.googleusercontent.com/GxpRsX2PER72FUWX-xQRF5pjGwHa0fydneULevgxMNqJfK4-z62D1ig7qKnRgijB37zAoKmCMlCd3ZvqXJqhoXwGXkYK30pB2a93YeOdIWELjjPqMla9OKRpMC99LN3tqosd_CpcuQ=w1280)

## 環境変数 `HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous` の設定

Hasuraの環境変数として `HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous` を与えることで、認証・認可していない利用者に割り当てられるロールを設定します。

Hasura Cloudのプロジェクトの画面に戻り、[Env vars]にアクセスします。

![](https://lh3.googleusercontent.com/egQYbjJjs_0kLlCmPpHe93odORHapxeZn-aEleKKFq2kPEtODMUd_j65aHPftyBZ_sMz9Ypy6P55fIk0KrIl1UC-mbL6zerBj7uYB0c0MofDz2I7sKC066oHsTN4BEjjxFz1fo54gA=w1280)

[+ New Env Var]ボタンを押して、環境変数を追加します。

| 環境変数                           | 説明                                           | 値          |
| ---------------------------------- | ---------------------------------------------- | ----------- |
| `HASURA_GRAPHQL_UNAUTHORIZED_ROLE` | 認証・認可されていない利用者に割り当てるロール | `anonymous` |

入力後、[Add]ボタン押して追加します。

![](https://lh3.googleusercontent.com/TZHIQuC6MviESxMktg2GYuS7yLJXrJCnhrGmVlB60EFaUpPalW6rVfHo01x5lWPvWwu047JLFSnCK22LDxL1m1fSH_OKzAopA9aV6sHGdLRSLUEOBS7i-cUBlR0TQvsIQG27Ky8obA=w1280)

![](https://lh3.googleusercontent.com/C1hwqyYYH8jtAZfkJG5y6DlOn7mYn9cXI1Er5xnGKZcddVw7dP_yj8_-j7v9D-SOjOi0Pu1qM74fLRu9XjSjFkU6LWbNysgS7QVU1ROqVJf0Ic0Hwud4rZyoxhopks2G8veA9SIMWg=w1280)

## REST APIエンドポイントの確認

実際にHasuraのREST APIエンドポイントにアクセスできるか確認してみましょう。

- プロトコル: HTTPS
- ドメイン名: `{Hasura Cloudのプロジェクト名}.hasura.app`

| 名称         | HTTPメソッドとパス       | 説明                                                                                                                                      |
| ------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ページの取得 | `GET /api/rest/page/:id` | 割り当てられた識別子 `id` をもつページを取得します。ページが存在する場合、レスポンスボディには `data.page.content` プロパティを含みます。 |
| ページの更新 | `PUT /api/rest/page/:id` | 割り当てられた識別子 `id` をもつページを更新します。リクエストボディには `content` プロパティを与えます。                                 |

例: `id` が `1` のページにアクセスする [https://memo-demo.hasura.app/api/rest/page/1](https://memo-demo.hasura.app/api/rest/page/1)

Hasura Cloudで作成したREST APIエンドポイントにアクセスするには、Hasura Cloudのプロジェクト名の直後に `.hasura.app` を加えたドメイン名でアクセスできます。
たとえば、Hasura Cloudのプロジェクト名が `memo-demo` の場合、ドメイン名は `memo-demo.hasura.app` となります。プロジェクトによって異なるので、自分の作成したプロジェクトに合わせて書き換えましょう。

これで、REST APIエンドポイントをWebアプリから利用する準備が整いました。
