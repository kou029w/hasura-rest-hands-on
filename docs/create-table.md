# テーブルの作成

[Data Manager] > [View Database] > [Add a new table]を選択し、新しいテーブルを作成します。

このハンズオンでは、次のデータモデルを作成します。

テーブル名: `pages` - メモ帳のページ

| 項目      | 型                       | 説明                                                                                |
| --------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `id` \*   | Integer (auto-increment) | ページの識別子                                                                      |
| `content` | JSONB                    | ページの本文 ([Quill Deltaオブジェクト](https://quilljs.com/docs/delta/)を使う想定) |

\*: Primary Key

データモデルのための必要事項を入力し、テーブルを作成します。Primary Keyとして `id` (ページの識別子)を選択します。

![](https://lh3.googleusercontent.com/nZo9b7TW32khyJBmmxzrk8GZfqWsPSfmPYdNAyIJ_L3tCek0p8zZl6JCCB7zXvmUbFHtnk2LYnzAimbImFC_ZS0aekik4MUr6jkX9wQTAaLCYXit8k1HgAw9aDvCmcGSl7WM_Ue7Rg=w1280)

テーブルの作成が完了するとその作成したテーブルの[Modify]パネルが表示されます。作成したテーブルへの変更はHasuraによって自動的に追従されます。

![](https://lh3.googleusercontent.com/L8V_vs7cCKWrzUlnh9H78aDCgPYjFaLxiZNN76lte8zU3NR9x1-jEy91Hx5hpulA4EfCcdPww7dbBqhzBXUBku6HdGKUvPm_4JZFmZSlX9Xy2mmjCRsyktfZuivCr98CdP-pfJX2uQ=w1280)

これでHasuraからGraphQLによるデータへの操作が可能になります。
