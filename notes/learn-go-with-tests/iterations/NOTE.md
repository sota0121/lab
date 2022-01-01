# Note

## Overview

[反復とベンチマークの使い方](https://andmorefine.gitbook.io/learn-go-with-tests/go-fundamentals/iteration)

- より多くのテスト駆動開発（TDD）プラクティス
- for文の学び
- ベンチマークの書き方を学ぶ


## Test first

```go
package iteration

import "testing"

func TestRepeat(t *testing.T) {
	repeated := Repeat("a", 4)
	expected := "aaaa"

	if repeated != expected {
		t.Errorf("expected %q but got %q", expected, repeated)
	}
}
```

## Impl

まずは何も見ずに書いてみた

```go
package iteration

func Repeat(char string, repeat_number int) (repeated string) {
	repeated := char
	for i := 0; i < repeat_number; i++ {
		repeated = repeated + char
	}
	return
}
```

すると `repeated := char` の部分で、こんなエラーが出た。

`no new variables on left side of :=`

これ何かというと `:=` を同じ変数に複数回使っているから。内容としては同じ変数を `:=` mutable で複数回宣言していることになるらしい。

https://mebee.info/2021/04/21/post-23149/#outline__2

ということで、2回目を `=` にしてみる。

これをみると、どうやら関数の戻り値変数名を記載したら、それで1回目の宣言として捉えられるようだ。ということがわかった。

```go
package iteration

func Repeat(char string, repeat_number int) (repeated string) {
-	repeated := char
+   repeated = char
	for i := 0; i < repeat_number; i++ {
		repeated = repeated + char
	}
	return
}
```

最大数を間違えた。

```bash
$ (arm64) > go test -v                                                                                                                                                                    [notes/learn-go-03]
=== RUN   TestRepeat
    repeat_test.go:10: expected "aaaa" but got "aaaaa"
--- FAIL: TestRepeat (0.00s)
FAIL
exit status 1
FAIL    github.com/sota0121/lab/notes/learn-go-with-tests/iterations    0.523s
```

```go
func Repeat(char string, repeat_number int) (repeated string) {
-   repeated = char
	for i := 0; i < repeat_number; i++ {
		repeated = repeated + char
	}
	return
}
```

