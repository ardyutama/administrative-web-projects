package models

import "gorm.io/gorm"

type Role struct {
	gorm.Model
	Name  string `json:"name" gorm:"unique"`
	Users []User `gorm:"foreignKey:RoleID"`
}

type AddRole struct {
	Name string `json:"name"`
}
