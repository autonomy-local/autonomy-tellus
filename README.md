# autonomy-tellus
🌏地域データ連携基盤

# What ?
国がデジタル田園都市国家構想の実現に向け整備を進めるデータ連携基盤におけるデータ仲介機能を提供するモジュールのOSS

# Why ?
国が想定する地域（エリア）単位は地域生活圏であり人口が概ね10万人程度となっている。また基盤整備の主体としては自治体単独、自治体や民間企業を含んだ協議会、または民間企業主体とされており住民は単なるサービス受益者とのみ規定されている。本OSSの目的は住民自らが組成する住民自治組織が自らのデータ連携基盤を整備しかつ運用を進める際の手段となることにある。

# How ?
## 設計方針（適宜修正）

- 対応エリアは過疎指定地域を除き概ね小学校区の範囲５Km圏域を想定し人口の想定を2万人程度とする。
- 過疎指定地域においては地理的な範囲上限を外すこととする。
- 各APIは政府推奨の実装群を参考実装とし上記の小規模のエリアに適したマイクロサービスとして構成する。
- 各マイクロサービスはk8sでの運用は考慮せずコンテナ化した各マイクロサービスをマネージドサービス上に展開運用する。
- APIゲートウェイもクラウドサービスのマネージドサービスを利用した構成とする。
- 参考実装としてガバメントクラウド対象クラウドサービスに順次対応する。

## 対象
推奨モジュール群のうち本OSSではパーソナルデータ連携モジュールのみをその範疇とする。

## 参考実装
政府が推奨するMITライセンスで作成されている実装を参考に新たな実装とする。

[ブローカー（パーソナル）「パーソナルデータ連携モジュール」](https://data-society-alliance.org/area-data/module/manual/#personal)

## 各サービス

### portal-service 住民向けポータルサービス
参考実装には含まれないがデータ連携基盤と各提供サービスに必要な住民アカウントの管理を行う。

### operator-service

### catalog-service

### catalog-update-service

### pxr-block-proxy-service

### notification-service

### book-manage-service

### book-operate-service

### identity-verificate-service

### ctoken-ledger-service

### local-ctoken-service

### certification-authority-service

### certificate-manage-service

### access-control-mange-service

### access-control-service

### binary-manage-service
