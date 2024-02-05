package models

import "gorm.io/gorm"

type DiskType struct {
	gorm.Model
	Name             string `json:"name" gorm:"unique"`
	VMSpecifications []VMSpecification
}

type DiskTypeResponse struct {
	Name string `json:"name"`
}
