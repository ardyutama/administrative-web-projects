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

	r.Get("/vmtypes", controllers.GetVMTypes)
	r.Post("/vmtypes", controllers.AddVMTypes)
	r.Delete("/vmtypes/:id", controllers.DeleteVMTypes)
	r.Put("/vmtypes/:id", controllers.EditVMTypes)

	r.Get("/sitelocations", controllers.GetSiteLocations)
	r.Post("/sitelocations", controllers.AddSiteLocations)
	r.Delete("/sitelocations/:id", controllers.DeleteSiteLocations)
	r.Put("/sitelocations/:id", controllers.EditSiteLocations)

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

	r.Get("requestbasedtypes", controllers.GetRequestBasedTypes)
	r.Post("requestbasedtypes", controllers.AddRequestBasedTypes)
	r.Delete("requestbasedtypes/:id", controllers.DeleteRequestBasedTypes)
	r.Put("requestbasedtypes/:id", controllers.EditRequestBasedTypes)

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

	r.Post("projects", controllers.AddProjects)
	r.Get("projects", controllers.GetProjects)

	r.Get("vmspecification", controllers.GetAllVMSpecifications)
	r.Post("vmspecification", controllers.AddVMSpecifications)
}
