import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, PlusCircle, Search } from "lucide-react"
import { DataTable } from "./data-table"
import { VirtualMachine, columns } from "./columns"
import { Row } from "@tanstack/react-table"

// async function getData(): Promise<VirtualMachine[]> {
//     return [
//         {
//             id: 1,
//             project: "Project 1",
//             service_type: "Service Type 1",
//             name: "VM 1",
//             cpu: 1,
//             memory: 1,
//             hdd: 1,
//             disk_type: "Disk Type 1",
//             operating_system: "Operating System 1",
//             vm_status: "VM Status 1",
//             purpose: "Purpose 1",
//             user_id: 1
//         }
//     ]
// }

const data = [
    {
        project_name: "Project 1",
        service_type: "VM",
        vm_type: "Database",
        name: "VM 1",
        cpu: 1,
        memory: 1,
        hdd: 1,
        disk_type: "Disk Type 1",
        operating_system: "Operating System 1",
        vm_status: "active-running",
        price: 9000,
        ip_public: "1.1.1.1",
        ip_local: "2.2.2.2",
        port: 8080,
        vpc_name: "VPC Name 1",
        no_modin: "No Modin 1",
        contract_request_type: "New",
        contract_document_date: "2022-01-01",
        contract_duration: "15",
        contract_expired: "2022-01-15",
        request_based_type: "perpanjangan",
        segment: "sso",
        gl_account: "123456",
        cost_center: "123456",
        site_location: "neucentrix-meruya",
        purpose: "Purpose 1",
        user_id: 1
    },
    {
        project_name: "Project 1",
        service_type: "Load Balancer",
        vm_type: "Service",
        name: "VM 1",
        cpu: 1,
        memory: 1,
        hdd: 1,
        disk_type: "Disk Type 1",
        operating_system: "Operating System 1",
        vm_status: "active-stopped",
        price: 9000,
        ip_public: "1.1.1.1",
        ip_local: "2.2.2.2",
        port: 8080,
        vpc_name: "VPC Name 1",
        no_modin: "No Modin 1",
        contract_request_type: "New",
        contract_document_date: "2022-01-01",
        contract_duration: "15",
        contract_expired: "2022-01-15",
        request_based_type: "perpanjangan",
        segment: "sso",
        gl_account: "123456",
        cost_center: "123456",
        site_location: "neucentrix-meruya",
        purpose: "Purpose 1",
        user_id: 1
    }
]
const renderSubComponent = ({ row }: { row: Row<VirtualMachine> }) => {
    return (
        <div className="flex gap-8 pl-20 py-6 ">
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Network</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <div>
                        <p className="font-medium text-muted-foreground">IP Public</p>
                        <p>{row.getValue("ip_public")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">IP Local</p>
                        <p>{row.getValue("ip_local")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Port</p>
                        <p>{row.getValue("port")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Port</p>
                        <p>{row.getValue("vpc_name")}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Contract</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <div>
                        <p className="font-medium text-muted-foreground">No Modin</p>
                        <p>{row.getValue("no_modin")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Dasar Permintaan</p>
                        <p>{row.getValue("request_based_type")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Tanggal Permintaan</p>
                        <p>{row.getValue("contract_document_date")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Kontrak Expired</p>
                        <p>{row.getValue("contract_expired")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Durasi</p>
                        <p>{row.getValue("contract_duration")} Hari</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export function VMManagement() {
    return (
        <div>
            <div className="flex justify-between">
                <h4 className="text-3xl font-semibold tracking-tight">
                    VM Management
                </h4>
                <div className="flex gap-4">
                    <Button className="bg-green-500">
                        <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Tambah VM
                    </Button>
                </div>

            </div>
            <div className="flex gap-4 w-72">
                <Input />
                <Button variant={"outline"} size={"icon"}>
                    <Search className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex mt-6">
                <div className="w-full grow">
                    <DataTable
                        columns={columns}
                        data={data}
                        getRowCanExpand={() => true}
                        renderSubComponent={renderSubComponent}
                    />
                </div>
            </div>
        </div>
    )
}