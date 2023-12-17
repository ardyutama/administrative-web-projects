// 🚀 Fiber is an Express inspired web framework written in Go with 💖
// 📌 API Documentation: https://docs.gofiber.io
// 📝 Github Repository: https://github.com/gofiber/fiber
package main

import (
	"awp/database"
	"awp/models"
	routes "awp/route"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}
	database.Migrate(&models.Contact{},
		&models.User{},
		&models.Contract{},
		&models.ContractRequestType{},
		&models.DiskType{},
		&models.Network{},
		&models.OperatingSystem{},
		&models.Price{},
		&models.Role{},
		&models.Service{},
		&models.ServiceType{},
		&models.VMSpecification{},
		&models.VMStatus{},
	)

	app := fiber.New()

	routes.SetupRoutes(app)

	app.Listen(":3000")
}
