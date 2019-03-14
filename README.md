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

## 問題点

- Double package.json?
- 自前のmodulesはどうする？  
  (https://qiita.com/out_of_kaya/items/f8432cc9b0011a8be476)
- Layerアップデート機能がない

