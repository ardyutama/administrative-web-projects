package models

import "gorm.io/gorm"

type ResourcePerHour struct {
	gorm.Model
	ResourceType string  `json:"name" gorm:"unique"`
	Quantity     int     `json:"quantity"`
	PricePerHour float64 `json:"price_per_hour"`
}
