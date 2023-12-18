package models

import "gorm.io/gorm"

type AdditionalFeature struct {
	gorm.Model
	BackupVM      string `json:"backup_vm"`
	ObjectStorage ObjectStorage
}
