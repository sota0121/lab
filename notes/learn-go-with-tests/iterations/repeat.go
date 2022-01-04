package iteration

func Repeat(char string, repeat_number int) (repeated string) {
	for i := 0; i < repeat_number; i++ {
		repeated = repeated + char
	}
	return
}
