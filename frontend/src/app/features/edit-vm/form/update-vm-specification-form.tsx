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

export const UpdateSpecificationForm = () => {
    return (
        <>
            <CardHeader>
                <CardTitle>Update Spesifikasi VM </CardTitle>
                <CardDescription>Update data untuk upgrade atau downgrade spesifikasi VM</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4 items-center">
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
                </div>
            </CardContent>
        </>
    )
}