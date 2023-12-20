package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"
	"errors"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func GetAllRoles(c *fiber.Ctx) error {
	roles := []models.Role{}
	database.DB.Find(&roles)
	return c.JSON(roles)
}

func AddRoles(c *fiber.Ctx) error {
	u := new(models.Role)
	handlers.BodyParser(c, &u)
	return handlers.AddUniqueEntity(c, &u)
}

func DeleteRoles(c *fiber.Ctx) error {
	role := new(models.Role)

	id := c.Params("id")

	err := database.DB.First(&role, id).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// Handle the case where the record doesn't exist
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Record not found"})
		}
		// Handle other errors
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	if err := database.DB.Delete(&role).Error; err != nil {
		// Handle the error during deletion
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to delete record"})
	}

	database.DB.Where("id = ?", id).Delete(&role)

	return c.Status(200).JSON("deleted")
}

func EditRoles(c *fiber.Ctx) error {
	role := new(models.Role)

	if err := c.BodyParser(role); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	id := c.Params("id")

	database.DB.Model(&models.Role{}).Where("id = ?", id).Update("name", role.Name)

	return c.Status(400).JSON("updated")
}
