package routes

import (
	"awp/controllers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	r := app.Group("/api/v1")
	r.Get("/services", controllers.GetServices)
}
