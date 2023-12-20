// 🚀 Fiber is an Express inspired web framework written in Go with 💖
// 📌 API Documentation: https://docs.gofiber.io
// 📝 Github Repository: https://github.com/gofiber/fiber
package main

import (
	"awp/database"
	"awp/models"
	"awp/route"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}
	database.Migrate(
		&models.Role{},
		&models.User{},
		&models.ServiceType{},
		&models.DiskType{},
		&models.Network{},
		&models.OperatingSystem{},
		&models.VMStatus{},
		&models.Price{},
		&models.VMSpecification{},
		&models.Contact{},
		&models.ContractRequestType{},
		&models.AdditionalFeature{},
		&models.ObjectStorage{},
		&models.Contract{},
		&models.Service{},
		&models.ResourcePerHour{},
	)

	app := fiber.New()

	route.ServiceRoutes(app)

	app.Listen(":3000")
}
