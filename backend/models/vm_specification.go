package models

import "gorm.io/gorm"

type VMSpecification struct {
	gorm.Model
	ProjectID              uint                     `json:"project_id"`
	ServiceTypeID          uint                     `json:"service_type_id"`
	VMTypeID               uint                     `json:"vm_type_id"`
	Name                   string                   `json:"name"`
	CPU                    int                      `json:"cpu"`
	Memory                 int                      `json:"memory"`
	HDD                    int                      `json:"hdd"`
	DiskTypeID             uint                     `json:"disk_type_id"`
	OperatingSystemID      uint                     `json:"operating_system_id"`
	VMStatusID             uint                     `json:"vm_status_id"`
	Price                  Price                    `gorm:"foreignkey:VMSpecificationID"`
	Network                Network                  `gorm:"foreignkey:VMSpecificationID"`
	Purpose                string                   `json:"purpose"`
	Contract               Contract                 `gorm:"foreignkey:VMSpecificationID"`
	VMSpecificationHistory []VMSpecificationHistory `gorm:"foreignKey:VMSpecificationID"`
	UserID                 uint                     `json:"user_id"`
}
