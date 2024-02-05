package models

import (
	"time"

	"gorm.io/gorm"
)

type Contract struct {
	gorm.Model
	VMSpecificationID     uint `json:"vm_specification_id"`
	ContractRequestTypeID uint `json:"contract_request_type_id"`
	ContractRequestType   ContractRequestType
	ContractDocumentDate  time.Time `json:"contract_document_date"`
	DeployementDate       time.Time `json:"deployement_date"`
	ContractDuration      int       `json:"contract_duration"`
	ContractExpired       time.Time `json:"contract_expired"`
	RequestBasedTypeID    uint      `json:"request_based_type_id"`
	RequestBasedType      RequestBasedType
	NumberModification    string `json:"number_modification"`
	Credential            string `json:"credential"`
}

type ContractResponse struct {
	gorm.Model
	VMSpecificationID       uint      `json:"vm_specification_id"`
	ContractRequestTypeName string    `json:"contract_request_type_name"`
	ContractDocumentDate    time.Time `json:"contract_document_date"`
	DeployementDate         time.Time `json:"deployement_date"`
	ContractDuration        int       `json:"contract_duration"`
	ContractExpired         time.Time `json:"contract_expired"`
	RequestBasedTypeName    string    `json:"request_based_type_name "`
	NumberModification      string    `json:"number_modification"`
	Credential              string    `json:"credential"`
}
