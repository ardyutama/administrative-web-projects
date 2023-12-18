package models

import "gorm.io/gorm"

type VMSpecification struct {
	gorm.Model
	ServiceID         uint
	Name              string `json:"name"`
	CPU               string `json:"cpu"`
	Memory            string `json:"memory"`
	HDD               string `json:"hdd"`
	DiskTypeID        uint
	NetworkID         uint
	OperatingSystemID uint
	VMStatusID        uint
	Price             Price  `gorm:"foreignkey:PriceID"`
	Purpose           string `json:"purpose"`
}
