package controllers

import (
	"awp/database"
	"awp/models"
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func AddServices(c *fiber.Ctx) error {
	service := new(models.Service)
	vmSpec := new(models.VMSpecification)

	if err := c.BodyParser(service); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}
	fmt.Println(service)

	if err := c.BodyParser(vmSpec); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}

	if err := database.DB.Create(&service); err.Error != nil {
		return fiber.NewError(fiber.StatusConflict, err.Error.Error())
	}

	vmSpec.ServiceID = service.ID

	if err := database.DB.Create(&vmSpec); err.Error != nil {
		return fiber.NewError(fiber.StatusConflict, err.Error.Error())
	}

	return c.JSON(service)

}
