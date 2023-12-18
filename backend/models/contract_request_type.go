package models

import "gorm.io/gorm"

type ContractRequestType struct {
	gorm.Model
	Name     string     `json:"name"`
	Contract []Contract `gorm:"foreignKey:ContractRequestTypeID"`
}
