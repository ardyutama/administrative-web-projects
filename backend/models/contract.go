package models

import "gorm.io/gorm"

type Contract struct {
	gorm.Model
	Service               Service
	ContractRequestTypeID uint   `json:"contract_request_type_id"`
	ContractDocumentDate  string `json:"contract_document_date"`
	ContractDuration      string `json:"contract_duration"`
	ContractExpired       string `json:"contract_expired"`
	Credential            string `json:"credential"`
	ContactID             uint   `json:"contact_id"`
}
