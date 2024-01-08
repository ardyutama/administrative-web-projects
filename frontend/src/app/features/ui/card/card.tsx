import Image from "next/image"
import { DollarSign } from "lucide-react"
export const Card = () => {
    return (
        <div className="rounded-xl border bg-card shadow pl-6 pr-2 py-6 flex flex-col gap-2">
            <div className="flex  flex-row justify-between items-center">
                <h3 className="text-sm font-semibold">Total Estimasi Tagihan</h3>
                <DollarSign className="h-4 w-4"/>
            </div>
            <div className="flex flex-col">
            <div className="text-2xl font-bold">Rp4000,000</div>
            <div className="text-base">1042 Unit</div>
            </div>
        </div>
    )
}