package models

import "gorm.io/gorm"

type VMSpecification struct {
	gorm.Model
	ServiceID         uint
	Name              string   `json:"name"`
	CPU               string   `json:"cpu"`
	Memory            string   `json:"memory"`
	HDD               string   `json:"hdd"`
	DiskTypeID        uint     `json:"disk_type_id"`
	NetworkID         uint     `json:"network_id"`
	OperatingSystemID uint     `json:"os_id"`
	VMStatusID        uint     `json:"vm_status_id"`
	VMStatus          VMStatus `gorm:"foreignKey:VMStatusID"`
	Price             Price    `json:"price_id" gorm:"foreignkey:PriceID"`
	Purpose           string   `json:"purpose"`
}
