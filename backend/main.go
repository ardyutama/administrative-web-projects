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
		&models.VMType{},
		&models.DiskType{},
		&models.Network{},
		&models.OperatingSystem{},
		&models.VMStatus{},
		&models.ContractRequestType{},
		&models.RequestBasedType{},
		&models.Contract{},
		&models.ContractHistory{},
		&models.Price{},
		&models.PriceHistory{},
		&models.VMSpecificationHistory{},
		&models.Contact{},
		&models.AdditionalFeature{},
		&models.ObjectStorage{},
		&models.SiteLocation{},
		&models.Project{},
		&models.VMSpecification{},
		&models.ResourcePerHour{},
	)

	app := fiber.New()

	route.ServiceRoutes(app)

	app.Listen(":3000")
}
