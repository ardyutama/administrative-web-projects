package models

import "gorm.io/gorm"

type Service struct {
	gorm.Model
	ServiceTypeID     uint              `json:"service_type_id"`
	ServiceType       ServiceType       `gorm:"foreignKey:ServiceTypeID"`
	NameService       string            `json:"name_service"`
	TotalVM           int               `json:"total_vm"`
	VMSpecification   []VMSpecification `gorm:"foreignKey:ServiceID"`
	ContractID        uint              `json:"contract_id"`
	Revenue           float64           `json:"revenue"`
	GLAccount         string            `json:"gl_account"`
	AdditionalFeature string            `json:"additional_feature"`
	VPCName           string            `json:"vpc_name"`
	UserID            uint              `json:"user_id"`
	User              User              `gorm:"foreignKey:UserID"`
}

type Services struct {
	Services []Service `json:"services"`
}
