package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	host     = "localhost"
	port     = 5432 // Default port
	user     = "root"
	password = "password"
	dbname   = "infomedia"
)

var DB *gorm.DB

func Connect() error {
	dsn := "root:ardy1607@tcp(127.0.0.1:3306)/infomedia?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")

	}
	DB = db
	return nil
}

func Migrate(tables ...interface{}) error {
	return DB.AutoMigrate(tables...)
}
