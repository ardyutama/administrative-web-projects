package models

import "gorm.io/gorm"

type Role struct {
	gorm.Model
	Name string `json:"name"`
	User []User `gorm:"foreignKey:UserID"`
}
