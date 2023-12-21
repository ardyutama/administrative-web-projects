package models

import "gorm.io/gorm"

type VMSpecification struct {
	gorm.Model
	ServiceID         uint
	NameProject       string `json:"name_project"`
	CPU               string `json:"cpu"`
	Memory            string `json:"memory"`
	HDD               string `json:"hdd"`
	DiskTypeID        uint   `json:"disk_type_id"`
	NetworkID         uint   `json:"network_id"`
	OperatingSystemID uint   `json:"operating_system_id"`
	VMStatusID        uint   `json:"vm_status_id"`
	PriceID           uint   `json:"price_id"`
	Price             Price  `gorm:"foreignkey:PriceID"`
	Purpose           string `json:"purpose"`
}
