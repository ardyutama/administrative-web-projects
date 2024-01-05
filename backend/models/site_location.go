package models

import "gorm.io/gorm"

type SiteLocation struct {
	gorm.Model
	Name     string `json:"name" gorm:"unique"`
	Projects []Project
}

type SiteLocationResponse struct {
	Name string `json:"name"`
}
