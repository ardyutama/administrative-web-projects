package models

import "gorm.io/gorm"

type VMStatus struct {
	gorm.Model
	Name             string `json:"name"`
	VMSpecifications []VMSpecification
}
