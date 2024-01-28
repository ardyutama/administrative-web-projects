package models

import "gorm.io/gorm"

type Project struct {
	gorm.Model
	ServiceName      string            `json:"service_name"`
	ProjectName      string            `json:"project_name"`
	VMSpecifications []VMSpecification `gorm:"foreignKey:ProjectID"`
	Revenue          float64           `json:"revenue" gorm:"-"`
	TotalVM          int               `json:"total_vm" gorm:"-"`
	Segment          string            `json:"segment"`
	GLAccount        string            `json:"gl_account"`
	CostCenter       string            `json:"cost_center"`
	SiteLocationID   uint              `json:"site_location_id"`
	ContactID        uint              `json:"contact_id"`
}

type ProjectDashboardResponse struct {
	ServiceName string  `json:"service_name"`
	ProjectName string  `json:"project_name"`
	Revenue     float64 `json:"revenue" gorm:"-"`
	TotalVM     int     `json:"total_vm" gorm:"-"`
}

func (p *Project) AfterFind(tx *gorm.DB) (err error) {
	// Calculate total_vm
	var totalVM int64
	if err := tx.Model(&VMSpecification{}).Where("project_id = ?", p.ID).Count(&totalVM).Error; err != nil {
		return err
	}
	p.TotalVM = int(totalVM)

	// Calculate revenue
	var revenue float64
	if err := tx.Model(&VMSpecification{}).
		Select("COALESCE(SUM(CASE WHEN vm_status_id = 1 THEN active_running_price WHEN vm_status_id = 2 THEN active_stopped_price ELSE 0 END), 0)").
		Joins("LEFT JOIN prices ON vm_specifications.id = prices.vm_specification_id").
		Where("project_id = ?", p.ID).
		Row().
		Scan(&revenue); err != nil {
		return err
	}
	p.Revenue = revenue

	return nil
}
