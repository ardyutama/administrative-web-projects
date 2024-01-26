import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const UpdateDuration = () => {
    return (
        <>
            <CardHeader>
                <CardTitle>Perpanjangan Kontrak</CardTitle>
                <CardDescription>Isi data untuk mengisi spesifikasi VM yang akan dipakai</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="deployement_date">Tanggal Kontrak</Label>
                        <Button
                            variant={"outline"}
                            className={
                                "w-full pl-3 text-left font-normal"
                            }
                        >
                            <span>Pick a date</span>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </div>
                    <div></div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="contract_expired">Tanggal Expired Lama</Label>
                        <Button
                            variant={"outline"}
                            className={
                                "w-full pl-3 text-left font-normal"
                            }
                        >
                            <span>Pick a date</span>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="contract_expired">Tanggal Expired Baru</Label>
                        <Button
                            variant={"outline"}
                            className={
                                "w-full pl-3 text-left font-normal"
                            }
                        >
                            <span>Pick a date</span>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </div>
                </div>
                <h4 className="font-bold">Kontrak Lama</h4>
                <div className="max-w-sm space-y-1.5">
                    <Label htmlFor="contract_duration">Duration</Label>
                    <div className="flex gap-2">
                        <Input id="contract_duration_month" placeholder="Bulan" />
                        <Input id="contract_duration_day" placeholder="Hari" />
                    </div>
                </div>

                <h4 className="font-bold">Kontrak Baru</h4>
                <div className="max-w-sm space-y-1.5">
                    <Label htmlFor="contract_duration">Duration</Label>
                    <div className="flex gap-2">
                        <Input id="contract_duration_month" placeholder="Bulan" />
                        <Input id="contract_duration_day" placeholder="Hari" />
                    </div>
                </div>
            </CardContent>
        </>
    )
}