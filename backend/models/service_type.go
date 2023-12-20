package models

import "gorm.io/gorm"

type ServiceType struct {
	gorm.Model
	Name     string    `json:"name" gorm:"unique"`
	Services []Service `gorm:"foreignKey:ServiceTypeID"`
}
