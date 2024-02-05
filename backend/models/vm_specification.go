package models

import "gorm.io/gorm"

type VMSpecification struct {
	gorm.Model
	ProjectID                uint                     `json:"project_id"`
	ServiceTypeID            uint                     `json:"service_type_id"`
	VMTypeID                 uint                     `json:"vm_type_id"`
	Name                     string                   `json:"name"`
	CPU                      int                      `json:"cpu"`
	Memory                   int                      `json:"memory"`
	HDD                      int                      `json:"hdd"`
	DiskTypeID               uint                     `json:"disk_type_id"`
	OperatingSystemID        uint                     `json:"operating_system_id"`
	VMStatusID               uint                     `json:"vm_status_id"`
	Price                    Price                    `gorm:"foreignkey:VMSpecificationID"`
	Network                  Network                  `gorm:"foreignkey:VMSpecificationID"`
	Purpose                  string                   `json:"purpose"`
	Contract                 Contract                 `gorm:"foreignkey:VMSpecificationID"`
	VMSpecificationHistories []VMSpecificationHistory `gorm:"foreignKey:VMSpecificationID"`
	UserID                   uint                     `json:"user_id"`
}

type VMSpecificationResponse struct {
	gorm.Model
	ProjectID                uint                     `json:"project_id"`
	ProjectName              string                   `json:"project_name"`
	ServiceName              string                   `json:"service_name"`
	GLAccount                string                   `json:"gl_account"`
	CostCenter               string                   `json:"cost_center"`
	SiteLocation             string                   `json:"site_location"`
	Segment                  string                   `json:"segment"`
	ServiceType              string                   `json:"service_type"`
	VMType                   string                   `json:"vm_type"`
	Name                     string                   `json:"name"`
	CPU                      int                      `json:"cpu"`
	Memory                   int                      `json:"memory"`
	HDD                      int                      `json:"hdd"`
	DiskType                 string                   `json:"disk_type"`
	OperatingSystem          string                   `json:"operating_system"`
	VMStatus                 string                   `json:"vm_status"`
	Price                    Price                    `gorm:"foreignkey:VMSpecificationID"`
	Network                  Network                  `gorm:"foreignkey:VMSpecificationID"`
	Purpose                  string                   `json:"purpose"`
	Contract                 Contract                 `gorm:"foreignkey:VMSpecificationID"`
	VMSpecificationHistories []VMSpecificationHistory `gorm:"foreignKey:VMSpecificationID"`
	UserID                   uint                     `json:"user_id"`
}
