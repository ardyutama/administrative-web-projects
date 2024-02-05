package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"
	"errors"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func GetRequestBasedTypes(c *fiber.Ctx) error {
	u := []models.RequestBasedType{}
	database.DB.Find(&u)
	return c.JSON(u)
}

func AddRequestBasedTypes(c *fiber.Ctx) error {
	u := new(models.RequestBasedType)
	handlers.BodyParser(c, &u)
	if err := handlers.AddUniqueEntity(c, &u); err != nil {
		// Handle the error response
		return err
	}
	return c.Status(fiber.StatusCreated).JSON(&models.RequestBasedType{
		Name: u.Name,
	})
}

func DeleteRequestBasedTypes(c *fiber.Ctx) error {
	u := new(models.RequestBasedType)

	id := c.Params("id")

	err := database.DB.First(&u, id).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// Handle the case where the record doesn't exist
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Record not found"})
		}
		// Handle other errors
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	if err := database.DB.Delete(&u).Error; err != nil {
		// Handle the error during deletion
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to delete record"})
	}

	return c.Status(200).JSON(fiber.Map{"message": "Successfully deleted"})
}

func EditRequestBasedTypes(c *fiber.Ctx) error {
	u := new(models.ContractRequestType)

	if err := c.BodyParser(u); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	id := c.Params("id")

	exist := new(models.RequestBasedType)
	res := database.DB.Model(&models.RequestBasedType{}).Where("id = ?", id).First(exist)

	if res.Error != nil {
		if errors.Is(res.Error, gorm.ErrRecordNotFound) {
			// Handle the case where the record doesn't exist
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Record not found"})
		}
		// Handle other errors
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	res = database.DB.Model(&models.RequestBasedType{}).Where("id = ?", id).Update("name", u.Name)
	if res.Error != nil {
		// Handle the error during update
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to update record"})
	}

	return c.Status(400).JSON(fiber.Map{"message": "Successfully Updated"})
}
