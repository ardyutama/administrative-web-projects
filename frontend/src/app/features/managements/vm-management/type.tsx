export type VirtualMachine = {
    id: number,
    project_name: string
    service_type: string
    vm_type: string
    name: string
    cpu: number
    memory: number
    hdd: number
    disk_type: string
    operating_system: string
    vm_status: "active-running" | "active-stopped" | "removed"
    price: number
    ip_public: string
    ip_local: string
    port: number
    vpc_name: string
    no_modin: string
    contract_request_type: string
    contract_document_date: string
    contract_duration: string
    deployement_date: string
    contract_expired: string
    request_based_type: string
    segment: string
    gl_account: string
    cost_center: string
    purpose: string
    site_location: string
    user_id: number
}