// vm_status.go
package models

import "gorm.io/gorm"

type VMStatus struct {
	gorm.Model
	Name            string            `json:"name"`
	VMSpecification []VMSpecification `gorm:"foreignKey:VMStatusID"`
}
