package models

import "gorm.io/gorm"

type ObjectStorage struct {
	gorm.Model
	BucketName          string            `json:"bucket_name"`
	BucketLimitSize     int               `json:"bucket_limit_size"`
	AdditionalFeatureID uint              `json:"additional_feature_id"`
	AdditionalFeature   AdditionalFeature `gorm:"foreignkey:AdditionalFeatureID"`
}
