# Hasura Cloudプロジェクトの作成

Hasuraを利用するためにHasura Cloudのプロジェクトを作成します。

プロジェクトが存在しない場合、まずプロジェクトの作成を行います。
すでに存在するプロジェクトを利用する場合は、下記のプロジェクトの作成の作業は不要です。

## プロジェクトの作成

[Hasura Cloudのトップページ](https://cloud.hasura.io/)にアクセスすると、プロジェクトの一覧画面が表示され、[Create Project]ボタンから、プロジェクト作成フォームを開きます。

プロジェクト作成フォームに必要事項を入力します。ここでは例として次の項目を入力します。

| 項目                  | 説明                  | 例                                                                                           |
| --------------------- | --------------------- | -------------------------------------------------------------------------------------------- |
| Choose a pricing plan | 料金プランの選択      | Free Tier - 無料                                                                             |
| Select a region       | リージョン            | US West (N. California) - 無料で利用可能なデフォルトのリージョン                             |
| Enter a project name  | プロジェクト名 (任意) | 小文字のアルファベット、数字、ハイフン (ただし先頭と末尾には使用禁止) で構成された独自の名前 |

必要事項を入力後、[Create project]ボタンを押し、プロジェクトを作成します。

![](https://lh3.googleusercontent.com/S5JmjK-PKTK1BW7Q0CXxQWfLpy4T8j96n3QqKy9p88fsLXPDX056uR3bC4MlhBJcSUjcSWNoJrc9mkXq3PG4S-Aax55awJrP65MSx6_dpavy0tNEsAE4YGu3X0IImUjYdE_7QesTHA=w1280)

プロジェクトの作成が完了すると、画面上にプロジェクトの詳細が表示されます。

![](https://lh3.googleusercontent.com/OHk3SnMo5zFoulppRwCkAahq6wr4JImN88XgSlkHYeZFhPTd1pHQp4CUXmDDRTAdmsk9kNCJLLzZ0x_yCH1kcnLQ9Zbkq2lm5KIJblFDBU56nJ3sSdposGBFVyUwrEMBXgNmox297A=w1280)

画面上にプロジェクトが表示されれば完了です。

![](https://lh3.googleusercontent.com/LL6dz4np-O19_runPMbCD5-d3kYc1_QUcc1bJif4Yx7dNr16SY4k6037kV82aqg1FrcYff3QGOFTqzyh9ReYyp-j43EtGJercr7dKxdBxcd1nDzPm9bbWFgJOYjhwNDUsGRWNV2d2g=w1280)

プロジェクトの[Launch Console]ボタンからHasuraのコンソール画面にアクセスして、Heroku Postgresへの接続を行いましょう。
