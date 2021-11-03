package main

import (
	"fmt"
	"time"
)

func display(msg string, num int) {
	for i := 0; i < num; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(msg, ":", i)
	}
}

func main() {
	display("direct", 3)

	go display("goroutine", 10)

	display("going", 1)

	time.Sleep(time.Second)
	fmt.Println("done")
}
