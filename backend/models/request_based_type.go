package models

import "gorm.io/gorm"

type RequestBasedType struct {
	gorm.Model
	Name      string     `json:"name" gorm:"unique"`
	Contracts []Contract `gorm:"foreignKey:RequestBasedTypeID"`
}
