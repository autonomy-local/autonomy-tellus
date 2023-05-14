# Golangのバージョンは最新を指定
FROM golang:latest as build-go
# Workdirを指定
WORKDIR /demo
# ホストのファイルをコンテナの作業ディレクトリにコピー
COPY go.mod .
COPY go.sum .
# ライブラリをインストール
RUN go mod download
# ホストのファイルをコンテナの作業ディレクトリにコピー
COPY . .
# ビルド
RUN  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /bin/demo .

FROM alpine:latest
RUN addgroup -S demo && adduser -S demo -G demo
USER demo
WORKDIR /home/demo
# ビルドしたバイナリをコンテナにコピー
COPY --from=build-go /bin/demo ./
# ポートを指定
EXPOSE 3000

