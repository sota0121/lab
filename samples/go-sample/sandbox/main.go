package main

import (
    "fmt"
    "time"
)

func main() {
    var prevTSUnix int64 = 0
    t := time.Now()
    fmt.Println(t.Unix())      // 1591096873
    fmt.Println(t.UnixNano())  // 1591096873618624554
    prevTSUnix = t.UnixNano()

    // UNIXからtime.Timeに変換
    t = time.Unix(t.Unix(), 0)
    fmt.Println(t)             // 2020-06-01 20:07:47 +0900 JST
    fmt.Println("---")
    dtFromUnixNano := time.Unix(prevTSUnix/1000000000, prevTSUnix%1000000000)
    fmt.Println(dtFromUnixNano)
}
