# Note

## To Solve

- `go mod init` が何をしているのかよくわからない
- Go モジュールが何なのかよくわからない

## Setup Project

https://qiita.com/melty_go/items/c977ba594efcffc8b567

```bash
mkdir project
cd project
go mod init project
```

> コマンドプロンプトを開いて先ほど作成したプロジェクト直下にcdし、
> 以下のコマンドを実行してGo環境を初期化してください。
> Goモジュールのパスが書かれたファイル（go.mod）が自動生成されます。

## About Go Mudules

https://zenn.dev/spiegel/articles/20210223-go-module-aware-mode

ここにかなり詳しい解説が書いてある。意外と複雑っぽい。

## Exec test

- `helloworld/main.go`
- `helloworld/main_test.go`

`go` は言語レベルでテストの仕組みが組み込まれている。

### Rules

- Script name : `xxx_test.go`
- Test func name : `Testxxx()`
- Test func arg is one : `Testxxx(t *testing.T)`


## Go Doc

`godoc -http :8000` でシステムのドキュメントを参照できる。

> godoc コマンドがない場合は、godocを含まない新しいバージョンのGo（1.14以降）を使用している可能性があります no longer including godoc。 go get golang.org/x/tools/cmd/godocを使用して手動でインストールできます。

PATHを通す必要がありそう。

- GOPATH
- GOBIN ( `$GOPATH/bin/` )

以下のコマンドであれば実行できた。

`$GOBIN/godoc -http :8000`


## 要件を追加 - Update Test

- Hello( name: string )
- return "Hello $name"

となるように修正する。

まずは、テストを修正する。

```go
func TestHello(t *testing.T) {
	got := Hello("Sota")
	want := "Hello, Sota"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
```

テストを実行すると失敗する。

```bash
# github.com/sota0121/lab/notes/learn-go-with-tests/helloworld [github.com/sota0121/lab/notes/learn-go-with-tests/helloworld.test]
./main_test.go:6:14: too many arguments in call to Hello
        have (string)
        want ()
FAIL    github.com/sota0121/lab/notes/learn-go-with-tests/helloworld [build failed]
```

## Testが通るように関数を修正する



