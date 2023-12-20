package models

import "gorm.io/gorm"

type OperatingSystem struct {
	gorm.Model
	Name             string `json:"name" gorm:"unique"`
	VMSpecifications []VMSpecification
}
