package models

import "gorm.io/gorm"

type Role struct {
	gorm.Model
	Name  string `json:"name" gorm:"unique"`
	Users []User `gorm:"foreignKey:RoleID;"`
}

type RoleResponse struct {
	gorm.Model
	Name string `json:"name"`
}
