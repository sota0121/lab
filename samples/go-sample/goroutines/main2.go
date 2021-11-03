// goroutine with global variable
package main

import (
	"fmt"
	"time"
)

var (
	global_val string = ""
)

func display(msg string, num int) {
	for i := 0; i < num; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(msg, ":", i)

		if i == 3 {
			global_val = "going"
		}

		fmt.Println("global val : ", global_val)
	}
}

func main() {
	global_val = "start"

	display("direct", 3)

	go display("goroutine", 10)

	display("going", 1)

	time.Sleep(time.Second)
	fmt.Println("done")
}
