import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const CardService = () => {
    return (
        <div className="py-6 px-9 flex justify-between border rounded-xl text-left shadow">
            <div className="flex flex-col gap-1">
                <div className="text-sm">
                    Project Name
                </div>
                <div className="text-lg font-bold">
                    Nama Layanan
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex flex-col gap-1">
                    <div className="text-sm">
                        Total VM
                    </div>
                    <div className="text-lg font-bold">
                        30
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-right">
                        Revenue
                    </div>
                    <div className="text-lg font-bold">
                        Rp9000,000
                    </div>
                </div>
                <Button variant={"ghost"} size={"icon"}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}