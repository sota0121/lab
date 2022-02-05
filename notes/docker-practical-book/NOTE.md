# Note

## Overview

- 『Docker実践ガイド 2e』の "5-4 複数サービスの一括管理" を試してみたがうまくいかなかった
- 以下のような結果（チェックがついているものは成功）
  - [x] image build
  - [x] image push (to my hub.docker repo)
  - [x] image pull and deploy stack to swarm
  - [x] creating overlay network on multi host cluster
  - [ ] curl web app from client container

- web app へのアクセスでは、 `ac01_web` service のVIPがなぜか2つ存在した
- 一応、両方ともに curl してみたが、一方は `no routing host` 他方は `time out`


