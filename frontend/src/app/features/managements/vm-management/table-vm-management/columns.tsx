"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronRight, PencilIcon } from "lucide-react";
import { VirtualMachineResponse } from "../../type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRupiah } from "@/hooks/getRupiah";
import { getStatusType } from "@/hooks/getStatus";
import { format, differenceInMonths, differenceInWeeks, differenceInDays } from 'date-fns';


export const columns: ColumnDef<VirtualMachineResponse>[] = [
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
        <ChevronRight
          className={`h-4 w-4 ${
            row.getIsExpanded() ? "rotate-90" : "rotate-0"
          } transition-all`}
        />
      </button>
    ),
  },
  {
    accessorKey: "service_name",
    header: "Layanan",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("service_name")}</div>
    ),
  },
  {
    accessorKey: "project_name",
    header: "Projek",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("project_name")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "cpu",
    header: () => <div className="text-right">CPU</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("cpu")}</div>
    ),
  },
  {
    accessorKey: "memory",
    header: () => <div className="text-right">RAM</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("memory")}</div>
    ),
  },
  {
    accessorKey: "hdd",
    header: () => <div className="text-right">HDD</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("hdd")}</div>
    ),
  },
  {
    accessorKey: "disk_type",
    header: "Disk Type",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("disk_type")}</div>
    ),
  },
  {
    accessorKey: "operating_system",
    header: "Operating System",
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("operating_system")}</div>
    ),
  },
  {
    accessorKey: "Price",
    header: () => <div className="text-right w-full">Price</div>,
    cell: ({ row }) => {
      const { icon, color, label } = getStatusType(row.original.vm_status);
      let price;
      if (row.original.vm_status == "active-running") {
        price = row.original.Price.active_running_price;
      } else {
        price = row.original.Price.active_stopped_price;
      }
      return (
        <div className="flex flex-col">
          <div className="text-right">{getRupiah(price)}</div>
          <div className={`flex items-center text-${color} self-end`}>
            <span className="truncate text-xs">{label}</span>
            {icon && React.createElement(icon, { className: "h-4 w-4 ml-1" })}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "site_location",
    header: "Location",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("site_location")}</div>
    ),
  },
  {
    accessorKey: "purpose",
    header: "Purpose",
  },
  {
    accessorKey: "segment",
    header: "Segment",
  },
  {
    accessorKey: "Duration",
    cell: ({ row }) => {
      function calculateDuration(currentDate: string, contractExpiryDate:string) {
        const monthsDiff = differenceInMonths(contractExpiryDate, currentDate);
        const weeksDiff = differenceInWeeks(contractExpiryDate, currentDate);
        const daysDiff = differenceInDays(contractExpiryDate, currentDate);
    
        if (monthsDiff >= 1) {
            return `${monthsDiff} month(s)`;
        } else if (weeksDiff >= 1) {
            return `${weeksDiff} week(s)`;
        } else if (daysDiff >= 1) {
            return `${daysDiff} day(s)`;
        } else {
            return 'less than 1 month';
        }
    }
    const duration = calculateDuration(row.original.Contract.contract_document_date, row.original.Contract.contract_expired)
      return (
        <div className="flex flex-col truncate">
          {duration}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button variant="outline" size="icon" asChild>
        <Link href="/edit-vm">
          <PencilIcon className="h-4 w-4" />
        </Link>
      </Button>
    ),
  },
];
