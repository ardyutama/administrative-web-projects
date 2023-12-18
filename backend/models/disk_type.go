package models

import "gorm.io/gorm"

type DiskType struct {
	gorm.Model
	Name             string `json:"name"`
	VMSpecifications []VMSpecification
}
