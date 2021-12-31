package main

import "testing"

func TestHello(t *testing.T) {
	got := Hello("Sota")
	want := "Hello, Sota"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
