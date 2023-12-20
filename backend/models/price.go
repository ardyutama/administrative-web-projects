// price.go
package models

import "gorm.io/gorm"

type Price struct {
	gorm.Model
	ActiveRunningPrice float64 `json:"active_running_price"`
	ActiveStoppedPrice float64 `json:"active_stopped_price"`
}
