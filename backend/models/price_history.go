// price.go
package models

import "gorm.io/gorm"

type PriceHistory struct {
	gorm.Model
	VMSpecificationHistoryID uint    `json:"vm_specification_history_id"`
	ActiveRunningPrice       float64 `json:"active_running_price"`
	ActiveStoppedPrice       float64 `json:"active_stopped_price"`
}
