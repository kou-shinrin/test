# README

## Environment

- nodejs8.10
- serverless

## Local

```
$ sls offline start --stage local
```

## Deployment

```
$ sls deploy --stage dev/stg/prod
```

## メリット

- common custom libs/models/utils/etc.
- decrease package size
- Speed up cold start

## 問題点

- Double package.json?
- 自前のmodulesはどうする？  
  (https://qiita.com/out_of_kaya/items/f8432cc9b0011a8be476)
- Layerアップデート機能がない

## Refs

- [AWS - Layers](https://serverless.com/framework/docs/providers/aws/guide/layers/#aws---layers)
- [Lambda Layersを使うとデプロイは遅くなり、コールドスタートは高速化する？！Lambda Layersを使って巨大なLambda Functionを分割した場合の挙動の変化](https://dev.classmethod.jp/server-side/serverless/big-lambda-function-vs-use-layer/)

