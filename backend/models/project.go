package models

import "gorm.io/gorm"

type Project struct {
	gorm.Model
	ServiceName      string            `json:"service_name"`
	ProjectName      string            `json:"project_name"`
	VMSpecifications []VMSpecification `gorm:"foreignKey:ProjectID"`
	Revenue          float64           `json:"revenue"`
	Segment          string            `json:"segment"`
	GLAccount        string            `json:"gl_account"`
	CostCenter       string            `json:"cost_center"`
	SiteLocationID   uint              `json:"site_location_id"`
	ContactID        uint              `json:"contact_id"`
}
