package models

import "gorm.io/gorm"

type Service struct {
	gorm.Model
	ServiceTypeID     uint   `json:"service_type_id"`
	NameService       string `json:"name_service"`
	TotalVM           int    `json:"total_vm"`
	VMSpecifications  []VMSpecification
	ContractID        uint    `json:"contract_id"`
	Revenue           float64 `json:"revenue"`
	GLAccount         string  `json:"gl_account"`
	AdditionalFeature string  `json:"additional_feature"`
	VPCName           string  `json:"vpc_name"`
	UserID            uint
}

type Services struct {
	Services []Service `json:"services"`
}
