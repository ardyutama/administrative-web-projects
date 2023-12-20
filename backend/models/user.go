package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string    `json:"username" validate:"required" gorm:"unique"`
	Password string    `json:"password" validate:"password"`
	RoleID   uint      `json:"role_id"`
	Services []Service `gorm:"foreignKey:UserID"`
}
type UserResponse struct {
	Username string `json:"username"`
	Password string `json:"-"`
}

type AuthResponse struct {
	Username string `json:"username"`
}
