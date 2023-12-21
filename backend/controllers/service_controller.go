package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"

	"github.com/gofiber/fiber/v2"
)

func GetServices(c *fiber.Ctx) error {
	u := []models.Service{}
	database.DB.Preload("VMSpecifications").Find(&u)
	return c.JSON(u)
}
func AddServices(c *fiber.Ctx) error {
	service := new(models.Service)
	// vmSpec := new(models.VMSpecification)
	handlers.BodyParser(c, &service)

	// handlers.BodyParser(c, &vmSpec)
	handlers.AddEntity(c, &service)
	// vmSpec.ServiceID = service.ID

	// if err := database.DB.Create(&vmSpec); err.Error != nil {
	// 	return fiber.NewError(fiber.StatusConflict, err.Error.Error())
	// }

	return c.JSON(service)
}
