package models

import (
	"time"

	"gorm.io/gorm"
)

type VMSpecificationHistory struct {
	gorm.Model
	VMSpecificationID uint      `json:"vm_specification_id"`
	ProjectID         uint      `json:"project_id"`
	ServiceTypeID     uint      `json:"service_type_id"`
	VMTypeID          uint      `json:"vm_type_id"`
	Name              string    `json:"name"`
	CPU               int       `json:"cpu"`
	Memory            int       `json:"memory"`
	HDD               int       `json:"hdd"`
	DiskTypeID        uint      `json:"disk_type_id"`
	OperatingSystemID uint      `json:"operating_system_id"`
	VMStatusID        uint      `json:"vm_status_id"`
	Price             Price     `gorm:"foreignkey:PriceID"`
	Network           Network   `gorm:"foreignkey:NetworkID"`
	Purpose           string    `json:"purpose"`
	Contract          Contract  `gorm:"foreignkey:ContractID"`
	UserID            uint      `json:"user_id"`
	AddDate           time.Time `json:"add_date"`
	AddBy             uint      `json:"add_by"`
}
