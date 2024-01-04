package models

import "gorm.io/gorm"

type Contact struct {
	gorm.Model
	Name        string    `json:"name"`
	PhoneNumber string    `json:"phone_number"`
	Email       string    `json:"email"`
	Projects    []Project `gorm:"foreignKey:ContactID"`
}
