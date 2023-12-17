package controllers

import (
	"awp/models"
	"database/sql"

	"github.com/gofiber/fiber/v2"
)

var db *sql.DB

func GetServices(c *fiber.Ctx) error {
	query := `
        SELECT s.id, st.name AS service_type, s.name_service, s.total_vm, vm.name AS vm_specification, c.name AS contract, s.revenue, s.gl_account, s.additional_feature, s.vpc_name, u.username AS user
        FROM services s
        LEFT JOIN service_types st ON s.service_type_id = st.id
        LEFT JOIN vm_specifications vm ON s.vm_specification_id = vm.id
        LEFT JOIN contracts c ON s.contract_id = c.id
        LEFT JOIN users u ON s.user_id = u.id
    `
	rows, err := db.Query(query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	defer rows.Close()

	result := models.Services{}

	for rows.Next() {
		service := models.Service{}
		if err := rows.Scan(&service.ID,
			&service.ServiceTypeID,
			&service.NameService,
			&service.TotalVM,
			&service.VMSpecification,
			&service.ContractID,
			&service.Revenue,
			&service.GLAccount,
			&service.AdditionalFeature,
			&service.VPCName,
			&service.UserID,
		); err != nil {
			return err // Exit if we get an error
		}

		// Append Employee to Employees
		result.Services = append(result.Services, service)
	}
	// Return Employees in JSON format
	return c.JSON(result)
}
