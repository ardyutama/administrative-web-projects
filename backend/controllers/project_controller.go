package controllers

import (
	"awp/database"
	"awp/handlers"
	"awp/models"

	"github.com/gofiber/fiber/v2"
)

func GetProjects(c *fiber.Ctx) error {
	u := []models.Project{}
	database.DB.Preload("VMSpecifications").Preload("VMSpecifications.Price").Preload("VMSpecifications.Network").Preload("VMSpecifications.Contract").Find(&u)
	return c.JSON(u)
}
func AddProjects(c *fiber.Ctx) error {
	u := new(models.Project)
	handlers.BodyParser(c, &u)
	if err := database.DB.Create(&u).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "An unexpected error occurred",
		})
	}
	return c.Status(fiber.StatusCreated).JSON(u)
}
