package controllers

import (
	"awp/database"
	"awp/models"
	"errors"
	"log"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func GetAllContacts(c *fiber.Ctx) error {
	u := []models.Contact{}
	database.DB.Find(&u)
	return c.JSON(u)
}

func AddContacts(c *fiber.Ctx) error {
	u := new(models.Contact)
	// Parse body into struct
	if err := c.BodyParser(u); err != nil {
		return c.Status(400).SendString(err.Error())
	}

	// Insert Employee into database
	res := database.DB.Create(&u)

	// Print result
	log.Println(res)

	// Return Employee in JSON format
	return c.JSON(u)
}

func DeleteContacts(c *fiber.Ctx) error {
	u := new(models.Contact)
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

	return c.Status(200).JSON("deleted")
}

func EditContacts(c *fiber.Ctx) error {
	u := new(models.Contact)

	if err := c.BodyParser(u); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	id := c.Params("id")

	exist := new(models.Contact)
	res := database.DB.Model(&models.Contact{}).Where("id = ?", id).First(exist)

	if res.Error != nil {
		if errors.Is(res.Error, gorm.ErrRecordNotFound) {
			// Handle the case where the record doesn't exist
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Record not found"})
		}
		// Handle other errors
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	res = database.DB.Model(&models.Contact{}).Where("id = ?", id).Updates(&u)

	if res.Error != nil {
		// Handle the error during update
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to update record"})
	}

	return c.Status(400).JSON("updated")
}
