'use client'
import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import { Activity, Ban, MinusCircle, ChevronDown, ChevronRight } from "lucide-react"
export type VirtualMachine = {
    project_name: string
    service_type: string
    vm_type: string
    name: string
    cpu: number
    memory: number
    hdd: number
    disk_type: string
    operating_system: string
    vm_status: 'active-running' | 'active-stopped' | 'removed'
    price: number
    ip_public: string
    ip_local: string
    port: number
    vpc_name: string
    no_modin: string
    contract_request_type: string
    contract_document_date: string
    contract_duration: string
    contract_expired: string
    request_based_type: string
    purpose: string
    site_location: string
    user_id: number
}

export const labels = [
    {
        value: "active-running",
        label: "Active-Running",
        icon: Activity,
        color: "text-green-500"
    },
    {
        value: "active-stopped",
        label: "Active-Stopped",
        icon: Ban,
        color: 'text-red-500'
    },
    {
        value: "removed",
        label: "Removed",
        icon: MinusCircle
    },
]

export const columns: ColumnDef<VirtualMachine>[] = [
    {
        id: "expanded",
        header: () => null,
        cell: ({ row }) => (
            <button
                {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: "pointer" },
                }}
            >
                {row.getIsExpanded() ?
                    <ChevronDown className="h-4 w-4" /> :
                    <ChevronRight className="h-4 w-4" />
                }
            </button>
        )
    },
    {
        accessorKey: "project_name",
        header: "Project",
        cell: ({ row }) =>
            <div className="w-[80px]">
                {row.getValue("project_name")}
            </div>
    },

    {
        accessorKey: "service_type",
        header: () => <div className="text-center">Tipe</div>,
        cell: ({ row }) =>
            <div className="w-full flex flex-col gap-2 items-center">
                <Badge variant="outline" className="inline-block text-nowrap">
                    {row.getValue("service_type")}
                </Badge>
                <div className="">
                    {row.getValue("vm_type")}
                </div>
            </div>
    },
    {
        accessorKey: "vm_type",
    },
    {
        accessorKey: "name",
        header: "Name",

    },
    {
        accessorKey: "vm_status",
        header: "VM Status",
        cell: ({ row }) => {
            const status = labels.find(
                (label) => label.value === row.getValue("vm_status")
            )

            if (!status) {
                return null
            }

            return (
                <div className={`flex w-fullitems-center ${status.color}`}>
                    {status.icon && (
                        <status.icon className={`mr-2 h-6 w-6`} />
                    )}
                    <span className="truncate">{status.label}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "cpu",
        header: () => <div className="text-right">CPU</div>,
        cell: ({ row }) =>
            <div className="w-[60px] text-right">
                {row.getValue("cpu")} Core
            </div>
    },
    {
        accessorKey: "memory",
        header: () => <div className="text-right">RAM</div>,
        cell: ({ row }) =>
            <div className="w-[40px] text-right">
                {row.getValue("memory")} GB
            </div>
    },
    {
        accessorKey: "hdd",
        header: () => <div className="text-right">HDD</div>,
        cell: ({ row }) =>
            <div className="w-[40px] text-right">
                {row.getValue("hdd")} GB
            </div>
    },
    {
        accessorKey: "disk_type",
        header: "Disk Type",
        cell: ({ row }) =>
            <div className="w-[100px]">
                {row.getValue("disk_type")}
            </div>

    },
    {
        accessorKey: "operating_system",
        header: "Operating System",
        cell: ({ row }) =>
            <div className="w-[150px]">
                {row.getValue("operating_system")}
            </div>
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price Estimation</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "IDR",
            }).format(amount);

            return <div className="w-[100px] text-right">
                {formatted}
            </div>

        }
    },
    {
        accessorKey: "ip_public",
        header: () => null

    },
    {
        accessorKey: "ip_local",
    },
    {
        accessorKey: "port",
        header: "Port"
    },
    {
        accessorKey: "vpc_name",
        header: "VPC Name",
        cell: ({ row }) =>
            <div className="w-[100px]">
                {row.getValue("vpc_name")}
            </div>
    },
    {
        accessorKey: "no_modin",
        header: "No Modin",
        cell: ({ row }) =>
            <div className="w-[100px]">
                {row.getValue("no_modin")}
            </div>
    },
    {
        accessorKey: "contract_document_date",
        header: "Tanggal Permintaan",
        cell: ({ row }) =>
            <div className="w-[150px]">
                {row.getValue("contract_document_date")}
            </div>
    },
    {
        accessorKey: "contract_duration",
        header: "Durasi Kontrak"
    },
    {
        accessorKey: "contract_expired",
        header: "Contract Expired",
        cell: ({ row }) =>
            <div className="w-[130px]">
                {row.getValue("contract_expired")}
            </div>
    },
    {
        accessorKey: "request_based_type",
        header: "Dasar Permintaan"
    },
    {
        accessorKey: "site_location",
        header: "Location"
    },
    {
        accessorKey: "purpose",
        header: "Purpose"
    }
]