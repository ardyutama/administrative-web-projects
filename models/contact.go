package models

import "gorm.io/gorm"

type Contact struct {
	gorm.Model
	Name        string     `json:"name"`
	PhoneNumber string     `json:"phone_number"`
	Email       string     `json:"email"`
	Contract    []Contract `gorm:"foreignKey:ContactID"`
}
