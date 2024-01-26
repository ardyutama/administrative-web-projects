import { Button } from "@/components/ui/button"
import { getRupiah } from "@/hooks/getRupiah"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { CardServiceType } from "./type"

export const CardService = ({ id, project_name, service_name, total_vm, revenue }: CardServiceType) => {
    return (
        <Link href={"layanan/" + id}>
            <div className="py-6 pl-9 pr-4 flex justify-between border rounded-xl text-left shadow hover:bg-slate-100 hover:cursor-pointer">
                <div className="flex flex-col gap-1">
                    <div className="text-sm">
                        {project_name}
                    </div>
                    <div className="text-lg font-bold">
                        {service_name}
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-1">
                        <div className="text-sm">
                            Total VM
                        </div>
                        <div className="text-lg font-bold">
                            {total_vm}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-right">
                            Revenue
                        </div>
                        <div className="text-lg font-bold">
                            {getRupiah(revenue)}
                        </div>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-4" />
                </div>
            </div>
        </Link>
    )
}