'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { labels } from "../../managements/vm-management/columns"

export const VMSpecificationForm = ({ nextStep }: { nextStep: () => void }) => {

    // const status = labels.find(
    //     (label) => label.value === row.getValue("vm_status")
    // )

    // if (!status) {
    //     return null
    // }
    // const amount = parseFloat(row.getValue("price"))
    // const formatted = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "IDR",
    // }).format(amount);

    return (
        <>
            <CardHeader>
                <CardTitle>Isi Spesifikasi VM </CardTitle>
                <CardDescription>Isi data untuk mengisi spesifikasi VM yang akan dipakai</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4 items-center">
                    <div className="w-1/2 space-y-1.5">
                        <Label htmlFor="vm_status">Status VM</Label>
                        <Select>
                            <SelectTrigger id="vm_status">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <h4 className="text-xl font-semibold">Spesifikasi</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="cpu">CPU</Label>
                            <Input id="cpu" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="memory">Memory</Label>
                            <Input id="memory" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="hdd">HDD Size</Label>
                            <Input id="hdd" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="disk_type">Disk Type</Label>
                            <Select>
                                <SelectTrigger id="disk_type">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold">Network</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="ip_public">IP Public</Label>
                            <Input id="ip_public" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="ip_private">IP Private</Label>
                            <Input id="ip_private" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="port">Port</Label>
                            <Input id="port" />
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="vpc_name">VPC Name</Label>
                            <Input id="vpc_name" />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold">Contract</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="contract_document_date">Tanggal Request Dokumen</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={
                                            "w-full pl-3 text-left font-normal"
                                        }
                                    >
                                        <span>Pick a date</span>
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="contract_duration">Duration</Label>
                            <div className="flex gap-2">
                                <Input id="contract_duration_month" placeholder="Bulan" />
                                <Input id="contract_duration_day" placeholder="Hari" />
                            </div>
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="deployement_date">Deployement Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={
                                            "w-full pl-3 text-left font-normal"
                                        }
                                    >
                                        <span>Pick a date</span>
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="max-w-sm space-y-1.5">
                            <Label htmlFor="contract_expired">Kontrak Expired</Label>
                            <Input id="contract_expired" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="price">Price Estimation</Label>
                        <div className="flex flex-col pt-2">
                            <div className={`flex items-center ${labels[0].color}`}>
                                <span className="truncate text-base">{labels[0].label}</span>
                            </div>
                            <div className="text-xl font-bold">
                                Rp9000,0000
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </>
    )
}