package models

import "gorm.io/gorm"

type AdditionalFeature struct {
	gorm.Model
	ProjectID uint    `json:"project_id"`
	Project   Project `gorm:"foreignkey:ProjectID"`
	BackupVM  string  `json:"backup_vm"`
}
