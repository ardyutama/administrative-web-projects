package models

import "gorm.io/gorm"

type AdditionalFeature struct {
	gorm.Model
	ServiceID     uint
	BackupVM      string `json:"backup_vm"`
	ObjectStorage ObjectStorage
}
