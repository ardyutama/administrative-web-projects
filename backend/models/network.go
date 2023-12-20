package models

import "gorm.io/gorm"

type Network struct {
	gorm.Model
	IPPublic         string `json:"ip_public"`
	IPLocal          string `json:"ip_local" gorm:"unique"`
	Port             int    `json:"port"`
	VPCName          string `json:"vpc_name"`
	VMSpecifications []VMSpecification
}
