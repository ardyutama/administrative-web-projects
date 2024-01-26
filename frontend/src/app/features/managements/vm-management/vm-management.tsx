import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { data } from './mock-data'
import { TableVMManagement } from "./table-vm-management/table-vm-management"
import { ButtonNavigation } from "@/ui/button/button"
import { VirtualMachine } from "./type"

async function getData(): Promise<VirtualMachine[]> {
    return data
}

export default async function VMManagement() {
    const vmlist = await getData();
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
                </div>
            </div>
            <div className="flex gap-4">
            </div>
            <TableVMManagement data={vmlist} />
        </div>
    )
}