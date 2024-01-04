package models

import "gorm.io/gorm"

type VMType struct {
	gorm.Model
	Name             string            `json:"name" gorm:"unique"`
	VMSpecifications []VMSpecification `gorm:"foreignKey:VMTypeID"`
}
