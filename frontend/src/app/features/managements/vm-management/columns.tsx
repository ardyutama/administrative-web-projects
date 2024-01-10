'use client'
import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import { Activity, Ban, MinusCircle, ChevronDown, ChevronRight } from "lucide-react"
import { VirtualMachine } from "./type"
import { Button } from "@/components/ui/button"

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
            <div className="w-full text-nowrap">
                {row.getValue("project_name")}
            </div>
    },
    {
        accessorKey: "service_type",
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
    },
    {
        accessorKey: "cpu",
        header: () => <div className="text-right">CPU</div>,
        cell: ({ row }) =>
            <div className="w-full text-right">
                {row.getValue("cpu")}
            </div>
    },
    {
        accessorKey: "memory",
        header: () => <div className="text-right">RAM</div>,
        cell: ({ row }) =>
            <div className="w-full text-right">
                {row.getValue("memory")}
            </div>
    },
    {
        accessorKey: "hdd",
        header: () => <div className="text-right">HDD</div>,
        cell: ({ row }) =>
            <div className="w-full text-right">
                {row.getValue("hdd")}
            </div>
    },
    {
        accessorKey: "disk_type",
        header: "Disk Type",
        cell: ({ row }) =>
            <div className="w-full text-nowrap">
                {row.getValue("disk_type")}
            </div>

    },
    {
        accessorKey: "operating_system",
        header: "Operating System",
        cell: ({ row }) =>
            <div className="truncate">
                {row.getValue("operating_system")}
            </div>
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right w-full">Price</div>,
        cell: ({ row }) => {
            const status = labels.find(
                (label) => label.value === row.getValue("vm_status")
            )

            if (!status) {
                return null
            }
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "IDR",
            }).format(amount);

            return (
                <div className="flex flex-col">
                    <div className="text-right">
                        {formatted}
                    </div>
                    <div className={`flex items-center ${status.color} self-end`}>
                        <span className="truncate text-xs">{status.label}</span>
                        {status.icon && (
                            <status.icon className={`ml-1 h-3 w-3`} />
                        )}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "ip_public",
    },
    {
        accessorKey: "ip_local",
    },
    {
        accessorKey: "port",
    },
    {
        accessorKey: "gl_account",
    },
    {
        accessorKey: "cost_center",
    },
    {
        accessorKey: "vpc_name",
    },
    {
        accessorKey: "no_modin",
    },
    {
        accessorKey: "contract_document_date",
    },
    {
        accessorKey: "deployement_date",
    },
    {
        accessorKey: "contract_duration",
        header: "Durasi Kontrak"
    },
    {
        accessorKey: "contract_expired",
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
    },
    {
        accessorKey: "segment",
        header: "Segment"
    },
    {
        id: "action",
        cell: ({ row }) => {
            return (
                <Button variant={"ghost"} size={"icon"}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            )
        }
    }
]