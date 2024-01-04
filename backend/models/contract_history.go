package models

import (
	"time"

	"gorm.io/gorm"
)

type ContractHistory struct {
	gorm.Model
	VMSpecificationHistoryID uint      `json:"vm_specification_id"`
	ContractRequestTypeID    uint      `json:"contract_request_type_id"`
	ContractDocumentDate     time.Time `json:"contract_document_date"`
	ContractDuration         int       `json:"contract_duration"`
	ContractExpired          time.Time `json:"contract_expired"`
	RequestBasedTypeID       uint      `json:"request_based_type_id"`
	NumberModification       string    `json:"number_modification"`
	Credential               string    `json:"credential"`
}
