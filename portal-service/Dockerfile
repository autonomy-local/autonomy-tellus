# golang最新版を指定する
FROM golang:latest

# コンテナ内に作業ディレクトリを作成
WORKDIR /app

# ホストのファイルをコンテナの作業ディレクトリにコピーする
COPY app/ .
RUN go mod download
RUN go build -o main ./main.go

EXPOSE $PORT

CMD ["/app/main"]