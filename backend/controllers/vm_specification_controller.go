package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"

	"github.com/gofiber/fiber/v2"
)

func GetAllVMSpecifications(c *fiber.Ctx) error {
	u := []models.VMSpecification{}
	database.DB.Find(&u)
	return c.JSON(u)
}

func AddVMSpecifications(c *fiber.Ctx) error {
	u := new(models.VMSpecification)
	handlers.BodyParser(c, &u)
	if err := database.DB.Create(&u).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "An unexpected error occurred",
		})
	}
	return c.Status(fiber.StatusCreated).JSON(u)
}

// func AddVMSpecifications(c *fiber.Ctx) error {
// 	u := new(models.VMSpecification)
// 	if err := c.BodyParser(u); err != nil {
// 		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
// 	}

// 	price := u.Price
// 	res := database.DB.Create(&price)

// 	if res.Error != nil {
// 		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": res.Error.Error()})
// 	}

// 	u.PriceID = price.ID

// 	result := database.DB.Create(&u)

// 	if result.Error != nil {
// 		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": result.Error.Error()})
// 	}

// 	return c.Status(fiber.StatusCreated).JSON(u)

// }
