// add portal app backend api
package main

import (
	// fiber
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World with Air👋!")
	})

	app.Listen(":8080")
}
