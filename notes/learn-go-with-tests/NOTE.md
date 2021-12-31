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

## 要件2 : 引数が空文字の場合は Hello World

test update (use subtest)

```go
func TestHello(t *testing.T) {

    t.Run("saying hello to people", func(t *testing.T) {
        got := Hello("Chris")
        want := "Hello, Chris"

        if got != want {
            t.Errorf("got %q want %q", got, want)
        }
    })

    t.Run("say 'Hello, World' when an empty string is supplied", func(t *testing.T) {
        got := Hello("")
        want := "Hello, World"

        if got != want {
            t.Errorf("got %q want %q", got, want)
        }
    })

}
```

### Update test - add test helper

```go
func TestHello(t *testing.T) {

	assertCorrectMessage := func(t *testing.T, got string, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello to people", func(t *testing.T) {
		got := Hello("Sota")
		want := "Hello, Sota"

		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Hello World' when an empty string is supplied", func(t *testing.T) {
		got := Hello("")
		want := "Hello, World"

		assertCorrectMessage(t, got, want)
	})
}
```

> このメソッドがヘルパーであることをテストスイートに伝えるには、 t.Helper()が必要です。失敗したときにこれを行うと、レポートされる行番号はテストヘルパー内ではなく、関数呼び出し内にあります。これにより、他の開発者が問題を簡単に追跡できるようになります。

### Fix function

```go
func Hello(name string) string {
	if name == "" {
		name = "World"
	}
	return englishHelloPrefix + name
}
```

exec test

```bash
$ go test
PASS
ok      github.com/sota0121/lab/notes/learn-go-with-tests/helloworld    0.379s
```

## Feedback loop for development

> サイクルをもう一度見てみましょう
> 1. テストを書く
> 2. コンパイラーをパスする
> 3. テストを実行し、失敗することを確認し、エラーメッセージが意味があることを確認します
> 4. テストに合格するのに十分なコードを記述します
> 5. リファクタリング


## 要件3 : 言語指定を可能にする

### overview

- `Hello(name string, lang string)`
- lang string 引数にしたがって、挨拶の言葉を切り替える
  - サポート
    - `Spanish` : `Hola`
    - `French` : `Bonjour`

### Update test

```go
	assertCorrectMessage := func(t *testing.T, got string, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello to people", func(t *testing.T) {
-		got := Hello("Sota")
+		got := Hello("Sota", "")
		want := "Hello, Sota"

		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Hello World' when an empty string is supplied", func(t *testing.T) {
-		got := Hello("")
+		got := Hello("", "")
		want := "Hello, World"

		assertCorrectMessage(t, got, want)
	})

+	t.Run("say 'Hola to people' when 'Spanish' is supplied as lang", func(t *testing.T) {
+		got := Hello("Sota", "Spanish")
+		want := "Hola, Sota"

+		assertCorrectMessage(t, got, want)
+	})
```

### Failed test

```bash
# github.com/sota0121/lab/notes/learn-go-with-tests/helloworld [github.com/sota0121/lab/notes/learn-go-with-tests/helloworld.test]
./main_test.go:15:15: too many arguments in call to Hello
        have (string, string)
        want (string)
./main_test.go:22:15: too many arguments in call to Hello
        have (string, string)
        want (string)
./main_test.go:29:15: too many arguments in call to Hello
        have (string, string)
        want (string)
FAIL    github.com/sota0121/lab/notes/learn-go-with-tests/helloworld [build failed]
```

### Fix codes

```go
const (
	englishHelloPrefix = "Hello, "
+	spanishHelloPrefix = "Hola, "
+	frenchHelloPrefix = "Bonjour, "
)

func Hello(name string, lang string) string {
+	prefix := ""
+	switch lang {
+	case "":
+		prefix = englishHelloPrefix
+	case "Spanish":
+		prefix = spanishHelloPrefix
+	case "French":
+		prefix = frenchHelloPrefix
+	}

	if name == "" {
		name = "World"
	}
	return prefix + name
}
```

### Enable all tests green

```bash
$ go test
PASS
ok      github.com/sota0121/lab/notes/learn-go-with-tests/helloworld    0.543s
```


### Refactoring

```go
func greetingPrefix(language string) (prefix string) {
    switch language {
    case french:
        prefix = frenchHelloPrefix
    case spanish:
        prefix = spanishHelloPrefix
    default:
        prefix = englishHelloPrefix
    }
    return
}
```


### Check test

```bash
$ go test
PASS
ok      github.com/sota0121/lab/notes/learn-go-with-tests/helloworld    0.474s
```
