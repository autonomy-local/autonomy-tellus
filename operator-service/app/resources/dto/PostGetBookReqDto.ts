// POST: Book参照APIのリクエストDTO

type CodeVersionObject struct {
	Value int `json:"value"`
	Ver int `json:"ver"`
}

type CodeObject struct {
	Value int `json:"value"`
}

type DataStartEndObject struct {
	Start time.Time `json:"start"`
	End time.Time `json:"end"`
}

type PostGetBookReqDto struct {
	// ユーザID
	UserId string `json:"userId"`

	// タイプ
	Type string `json:"type"`

	// 識別子
	Identifier string `json:"identifier"`

	// 検索更新日時
	updatedAt DataStartEndObject `json:"updatedAt"`

	// コードオブジェクト
	code CodeVersionObject[] `json:"code"`

	// アプリケーションオブジェクト
	app CodeObject `json:"app"`

	// ワークフローオブジェクト
	wf CodeObject `json:"wf"`
}