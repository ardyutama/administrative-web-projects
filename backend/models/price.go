// price.go
package models

import "gorm.io/gorm"

type Price struct {
	gorm.Model
	VMSpecificationID  uint    `json:"vm_specification_id"`
	ActiveRunningPrice float64 `json:"active_running_price"`
	ActiveStoppedPrice float64 `json:"active_stopped_price"`
}
