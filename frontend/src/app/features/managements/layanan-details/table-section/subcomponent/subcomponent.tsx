'use client'
import { Row } from "@tanstack/react-table"
import { VirtualMachine } from "../type";
import { Separator } from "@/components/ui/separator";
import { LayoutDetail } from "./layout";
import { NameValueItem } from "../../../../ui/name-value-item";
export const renderSubComponent = ({ row }: { row: Row<VirtualMachine> }) => {
    return (
        <>
            <div className="flex gap-4 px-6 py-4">
                <LayoutDetail title="Network">
                    <NameValueItem name="IP Public" value={row.getValue("ip_public")} />
                    <NameValueItem name="IP Local" value={row.getValue("ip_local")} />
                    <NameValueItem name="Port" value={row.getValue("port")} />
                    <NameValueItem name="VPC Name" value={row.getValue("vpc_name")} />
                </LayoutDetail>
                <div>
                    <Separator orientation="vertical" />
                </div>
                <LayoutDetail title="Contract">
                <NameValueItem name="No Modin" value={row.getValue("no_modin")} />
                    <NameValueItem name="GL Account" value={row.getValue("gl_account")} />
                    <NameValueItem name="Cost Center" value={row.getValue("cost_center")} />
                    <NameValueItem name="Dasar Permintaan" value={row.getValue("request_based_type")} />
                    <NameValueItem name="Tanggal Permintaan" value={row.getValue("contract_document_date")} />
                    <NameValueItem name="Tanggal Deploy" value={row.getValue("deployement_date")} />
                    <NameValueItem name="Durasi" value={row.getValue("contract_duration")} />
                    <NameValueItem name="Expired" value={row.getValue("contract_expired")} />
                </LayoutDetail>
                <div>
                    <Separator orientation="vertical" />
                </div>
                <LayoutDetail title="Tipe">
                    <NameValueItem name="Tipe Service" value={row.getValue("service_type")} />
                    <NameValueItem name="Tipe VM" value={row.getValue("vm_type")} />
                </LayoutDetail>
                <div>
                    <Separator orientation="vertical" />
                </div>
                <LayoutDetail title="Peruntukan">
                    <NameValueItem name="Peruntukan" value={row.getValue("purpose")} />
                </LayoutDetail>
            </div>
        </>
    )
};