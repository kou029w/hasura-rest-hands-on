# Heroku Postgresへの接続

Hasuraでデータの保存と検索を実現するためにデータベースを接続します。

このハンズオンでは、データベースとしてHeroku Postgresを利用します。

Hasura Cloudのプロジェクトの[Launch Console]ボタンからHasuraのコンソール画面にアクセスして、Heroku Postgresへの接続を行うことが可能です。

まず、コンソール > [Data Manager] にアクセスします。

![](https://lh3.googleusercontent.com/ekEWHMTkf2qak5oItkay-scmzeiwiaUtNXBvBdCSVSJ3qG25oVc8O_25S4SEWZskj6NqWSfW2eENeEy3iJ94mTw1SmhnL7tONbS_qHHZsgI4l_6sEIdmMnXTEpmF34-aDS2I3Pi7EQ=w1280)

[Create Heroku Database]を選択し、データベース作成パネルを表示します。

![](https://lh3.googleusercontent.com/46sywF2Hl5GGAEsXhAkhhni4_NHcB-kcHiqqJNkZs0HS7zvFy9FZmmWEGLtP-i6F-msLnuJlKPFst8j8_QTCnTcDi1B5diKByqOVDAeuZ_PL1Fo_pDl_DLOBscL-O8ucqZA05_xyjA=w1280)

[Create Database]ボタンを選択し、Heroku Postgresデータベースを新たに作成します。Herokuとの連携を行う際に、初回アクセス時にはHerokuの承認画面が表示されます。[Allow (許諾)]を選択するとHerokuとの連携が完了します。

![](https://lh3.googleusercontent.com/RngvddZ704jKqqPfxGiSEdEkBemMwrz3jApRJQhRqL2Cr0MoV-SxVljdLaglM0XFwkcnIpWFD9zVyUtn9n55LGKG78gJPec6HRrWXrcLbNNnHztycmF-sphYYBkHaRT7Y87nzihdNg=w1280)

一連の手順でHeroku Postgresデータベースを作成すると、Hasuraは自動的にデータベースへの接続を開始します。

![](https://lh3.googleusercontent.com/-0FkvEXZO0FQz0YvrNFdh8JmAMZPbIpaIRygkE4F8xb4Z3ZLMRH9y5pny48-bj-i2nnhbDuqcPKokbznD7X_APL-MkjDeHaxQsJjFyGEY6AxvMBsHwfNOjxPdjQA6S3dGrW1Cz4o0g=w1280)

しばらく待つと、データベースへの接続が完了します。

これであなたはHasuraを利用可能になりました 🎉

![](https://lh3.googleusercontent.com/vJU-gDZJwSNJYAaoq4qu4lAnxhNYGE70rPxmtGct_GyPT9oH0FoZ8_2O8bcI9ocaWHaJsE0Rqv2WHZzO6Z0yGuMkaCtMYjdIKTHW2aREaCYid73GlT6FWLZH9JIQPp_P9QOez0EOBw=w1280)

それでは実際にHasuraを使ってみましょう!
