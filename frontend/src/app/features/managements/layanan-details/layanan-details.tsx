'use client'
import { Button } from "@/components/ui/button"
import { NameValueItem } from "@/ui/name-value-item"
import { Trash2 } from "lucide-react"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { data } from "./mock-data"
import { renderSubComponent } from "./subcomponent"
import { ButtonNavigation } from "../../ui/button/button"

export const LayananDetailsSection = ({ id }: { id: string }) => {
    return (
        <div className="mx-16 my-6 gap-6 flex flex-col">
            <h2 className="text-3xl font-bold">Layanan Details</h2>
            <div className="w-full justify-between flex">
                <div className="flex gap-6">
                    <NameValueItem name="Nama Layanan" value="Layanan 1" />
                    <NameValueItem name="Project Name" value="Project 1" />
                    <NameValueItem name="Segmen" value="sso" />
                </div>
                <div className="flex gap-6">
                    <NameValueItem name="Revenue" value="Rp90000,0000" />
                    <NameValueItem name="Created Date" value="Project 1" />
                    <NameValueItem name="Last Update" value="sso" />
                    <ButtonNavigation href="/tambah-vm" title="Add VM" />
                    <Button className="bg-red-500">
                        <Trash2 className="h-4 w-4" />
                        <p>Delete</p>
                    </Button>
                </div>
            </div>
            <div className="w-full grow">
                <DataTable
                    columns={columns}
                    data={data}
                    getRowCanExpand={() => true}
                    renderSubComponent={renderSubComponent}
                />
            </div>
        </div>
    )
}