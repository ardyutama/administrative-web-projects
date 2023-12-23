package models

import "gorm.io/gorm"

type Service struct {
	gorm.Model
	ServiceTypeID     uint              `json:"service_type_id"`
	NameService       string            `json:"name_service"`
	TotalVM           int               `json:"total_vm"`
	VMSpecifications  []VMSpecification `gorm:"foreignKey:ServiceID"`
	Contract          Contract
	Revenue           float64 `json:"revenue"`
	GLAccount         string  `json:"gl_account"`
	AdditionalFeature AdditionalFeature
	UserID            uint `json:"user_id"`
}
