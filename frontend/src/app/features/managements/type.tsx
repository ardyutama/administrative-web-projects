export type ProjectResponse = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    service_name: string;
    project_name: string;
    VMSpecifications: VirtualMachineResponse[];
    revenue: number;
    total_vm: number;
    segment: string;
    gl_account: string;
    cost_center: string;
    site_location_id: number;
    contact_id: number;
};

export type VirtualMachineResponse = {
  ID: number;
  project_name: string;
  service_name: string;
  service_type: string;
  vm_type: string;
  name: string;
  cpu: number;
  memory: number;
  hdd: number;
  disk_type: string;
  operating_system: string;
  vm_status: "active-running" | "active-stopped" | "removed";
  Price: {
    active_running_price: number;
    active_stopped_price: number;
  };
  Network: {
    ip_public: string;
    ip_local: string;
    port: number;
    vpc_name: string;
  };
  Contract: {
    number_modification: string;
    contract_request_type: string;
    contract_document_date: string;
    contract_duration: string;
    deployement_date: string;
    contract_expired: string;
    request_based_type: string;
  };
  segment: string;
  gl_account: string;
  cost_center: string;
  purpose: string;
  site_location: string;
  user_id: number;
};

// export type VirtualMachineList = {
//   data: VirtualMachineRe[];
// };
