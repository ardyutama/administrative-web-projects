package route

import (
	"awp/controllers"

	"github.com/gofiber/fiber/v2"
)

func ServiceRoutes(app fiber.Router) {
	r := app.Group("/api/v1")

	r.Get("/roles", controllers.GetAllRoles)
	r.Post("/roles", controllers.AddRoles)
	r.Delete("/roles/:id", controllers.DeleteRoles)
	r.Put("/roles/:id", controllers.EditRoles)

	r.Post("/users/signup", controllers.SignUp)
	r.Post("/users/login", controllers.Login)

	r.Get("/servicetypes", controllers.GetServiceTypes)
	r.Post("/servicetypes", controllers.AddServiceTypes)
	r.Delete("/servicetypes/:id", controllers.DeleteServiceTypes)
	r.Put("/servicetypes/:id", controllers.EditServiceTypes)

	r.Get("/disktypes", controllers.GetDiskTypes)
	r.Post("/disktypes", controllers.AddDiskTypes)
	r.Delete("/disktypes/:id", controllers.DeleteDiskTypes)
	r.Put("/disktypes/:id", controllers.EditDiskTypes)

	r.Get("operatingsystems", controllers.GetOperatingSystems)
	r.Post("operatingsystems", controllers.AddOperatingSystems)
	r.Delete("operatingsystems/:id", controllers.DeleteOperatingSystems)
	r.Put("operatingsystems/:id", controllers.EditOperatingSystems)

	r.Get("vmstatus", controllers.GetVMStatuses)
	r.Post("vmstatus", controllers.AddVMStatuses)
	r.Delete("vmstatus/:id", controllers.DeleteVMStatuses)
	r.Put("vmstatus/:id", controllers.EditVMStatuses)

	r.Get("contractrequesttypes", controllers.GetContractRequestTypes)
	r.Post("contractrequesttypes", controllers.AddContractRequestTypes)
	r.Delete("contractrequesttypes/:id", controllers.DeleteContractRequestTypes)
	r.Put("contractrequesttypes/:id", controllers.EditContractRequestTypes)

	r.Get("contacts", controllers.GetAllContacts)
	r.Post("contacts", controllers.AddContacts)
	r.Delete("contacts/:id", controllers.DeleteContacts)
	r.Put("contacts/:id", controllers.EditContacts)

	r.Get("networks", controllers.GetNetworks)
	r.Post("networks", controllers.AddNetworks)
	r.Delete("networks/:id", controllers.DeleteNetworks)
	r.Put("networks/:id", controllers.EditNetworks)

	r.Post("vmstatus", controllers.AddVMStatuses)
	r.Get("vmstatus", controllers.GetVMStatuses)
	r.Delete("vmstatus/:id", controllers.DeleteVMStatuses)
	r.Put("vmstatus/:id", controllers.EditVMStatuses)

	r.Get("contracts", controllers.GetContracts)
	r.Post("contracts", controllers.AddContracts)

	r.Get("services", controllers.GetServices)
	r.Post("services", controllers.AddServices)
	r.Delete("services/:id", controllers.DeleteServices)

	r.Get("vmspecification", controllers.GetAllVMSpecifications)
	r.Post("vmspecification", controllers.AddVMSpecifications)
}
