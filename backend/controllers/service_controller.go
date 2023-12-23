package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"

	"github.com/gofiber/fiber/v2"
)

func GetServices(c *fiber.Ctx) error {
	u := []models.Service{}
	database.DB.Preload("VMSpecifications.Price").Preload("Contract").Find(&u)
	return c.JSON(u)
}

func AddServices(c *fiber.Ctx) error {
	service := new(models.Service)

	handlers.BodyParser(c, &service)

	vmSpec := service.VMSpecifications
	contract := service.Contract

	if err := database.DB.Create(&service).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "An unexpected error occurred",
		})
	}
	for i := range vmSpec {
		vmSpec[i].ServiceID = service.ID
		price := vmSpec[i].Price
		database.DB.Create(&price)
		vmSpec[i].PriceID = price.ID
	}
	contract.ServiceID = service.ID

	database.DB.Create(&vmSpec)

	if err := database.DB.Create(&contract).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "An unexpected error occurred",
		})
	}
	return c.JSON(service)
}

func DeleteServices(c *fiber.Ctx) error {
	service := new(models.Service)

	id := c.Params("id")

	if err := database.DB.Preload("VMSpecifications.Price").Preload("Contract").First(&service, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Service not found",
		})
	}

	// Delete the associated VMSpecifications and their Prices
	for _, vmSpec := range service.VMSpecifications {
		// Delete the associated Price
		if err := database.DB.Delete(&vmSpec.Price).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Failed to delete Price",
			})
		}

		// Delete the VMSpecification
		if err := database.DB.Delete(&vmSpec).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Failed to delete VMSpecification",
			})
		}
	}

	// Delete the associated Contract
	if err := database.DB.Delete(&service.Contract).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete Contract",
		})
	}

	// Delete the Service itself
	if err := database.DB.Delete(&service).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete Service",
		})
	}

	return c.SendStatus(fiber.StatusOK)
}
