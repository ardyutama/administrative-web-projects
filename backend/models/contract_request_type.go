package models

import "gorm.io/gorm"

type ContractRequestType struct {
	gorm.Model
	Name      string     `json:"name" gorm:"unique"`
	Contracts []Contract `gorm:"foreignKey:ContractRequestTypeID"`
}
