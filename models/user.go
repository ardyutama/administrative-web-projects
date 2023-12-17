package models

type User struct {
	Username string    `json:"username"`
	Password string    `json:"password"`
	RoleID   uint      `json:"role_id"`
	Service  []Service `gorm:"ForeignKey:UserID"`
}
