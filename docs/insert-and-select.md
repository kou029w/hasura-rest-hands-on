# GraphQLによるデータの挿入と取得

<!--
TODO:
(GraphQLの基本)
-->

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

![](https://lh3.googleusercontent.com/ygTdByArh1HC1hmh_Eq76ExXmcy0bq2k2y4uBgS3Gdqs7VPb9SjsjuPa_vB5o55Wt69yswx-UHHbjhLdQLH0Cnd2zLMKIWU8wKpQ_zPXmpKki6H5ugVg8B7qDwfY2qnZthheXM-h9w=w1280)

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

![](https://lh3.googleusercontent.com/2ExXahoxvOy25dwNkM8YhlVdlo_3T5kjqGDSRzDfV2O3TV3gjK2F03zp_ewSuafsH_nyS0voOsX5G6uahxSgNRp-BpYpQSCFE36v85D_sEaSnfMcGwPnQMI7kWqsV0X1aUAQhnUgqg=w1280)

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

![](https://lh3.googleusercontent.com/WE8Pqbr0M-RwfGTxoq8uPyZcLkjppcP_g5HVGastYV_pr7Q_mYB9svilyeTRF7G0WK7g4Xgi19AgamY-8h9xuo_05AKb5r96dtiJJpWe7IX7aJjCs9fBssMxhAZUfDA1OsJ1NZ_Yvw=w1280)
