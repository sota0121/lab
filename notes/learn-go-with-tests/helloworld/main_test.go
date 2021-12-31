package main

import "testing"

func TestHello(t *testing.T) {

	assertCorrectMessage := func(t *testing.T, got string, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello to people", func(t *testing.T) {
		got := Hello("Sota", "")
		want := "Hello, Sota"

		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Hello World' when an empty string is supplied", func(t *testing.T) {
		got := Hello("", "")
		want := "Hello, World"

		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Hola to people' when 'Spanish' is supplied as lang", func(t *testing.T) {
		got := Hello("Sota", "Spanish")
		want := "Hola, Sota"

		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Bonjour to people' when 'French' is supplied as lang", func(t *testing.T) {
		got := Hello("Sota", "French")
		want := "Bonjour, Sota"

		assertCorrectMessage(t, got, want)
	})
}
