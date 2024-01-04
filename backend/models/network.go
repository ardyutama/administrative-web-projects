package models

import "gorm.io/gorm"

type Network struct {
	gorm.Model
	VMSpecificationID uint   `json:"vm_specification_id"`
	IPPublic          string `json:"ip_public"`
	IPLocal           string `json:"ip_local" gorm:"unique"`
	Port              int    `json:"port"`
	VPCName           string `json:"vpc_name"`
}
