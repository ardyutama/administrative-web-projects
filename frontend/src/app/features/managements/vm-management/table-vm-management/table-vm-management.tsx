'use client'
import { SearchBar } from '@/ui/search-bar'
import { DataTable } from "@/ui/table"
import { columns } from './columns'
import { renderSubComponent } from './subcomponent'
import { VirtualMachine, VirtualMachineList } from '../type'

type VirtualMachineTableProps = {
    data: VirtualMachine[]
}
export const TableVMManagement = ({ data }: VirtualMachineTableProps) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center'>
                <SearchBar />
            </div>
            <div className="grid grid-cols-4">
                <div className=''></div>
                <div className="w-full grow col-span-3">
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