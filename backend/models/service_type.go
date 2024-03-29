package models

import "gorm.io/gorm"

type ServiceType struct {
	gorm.Model
	Name             string            `json:"name" gorm:"unique"`
	VMSpecifications []VMSpecification `gorm:"foreignKey:ServiceTypeID"`
}
