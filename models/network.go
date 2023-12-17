package models

import "gorm.io/gorm"

type Network struct {
	gorm.Model
	IPPublic        string `json:"ip_public"`
	IPLocal         string `json:"ip_local"`
	Port            int    `json:"port"`
	VMSpecification []VMSpecification
}
