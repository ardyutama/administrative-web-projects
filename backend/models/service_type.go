package models

import "gorm.io/gorm"

type ServiceType struct {
	gorm.Model
	Name     string `json:"name"`
	Services []Service
}
