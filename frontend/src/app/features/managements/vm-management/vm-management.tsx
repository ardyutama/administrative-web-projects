'use client'
import { Button } from "@/components/ui/button"
import { Download, PlusCircle } from "lucide-react"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { data } from './mock-data'
import { renderSubComponent } from "./subcomponent"
import { SearchBar } from '@/ui/search-bar'
import { useRouter } from 'next/navigation'
export function VMManagement() {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <h4 className="text-3xl font-semibold tracking-tight">
                    VM Management
                </h4>
                <div className="flex gap-4">
                    <Button className="bg-green-500">
                        <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                    <Button onClick={() => router.push("/tambah-vm")}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Tambah VM
                    </Button>
                </div>
            </div>
            <div className="flex gap-4">
                 <SearchBar />
            </div>
            <div className="flex">
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