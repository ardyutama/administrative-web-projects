import {
    CardContent,
    CardDescription,
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
import { Label } from "@/components/ui/label"
import { getRupiah } from "@/hooks/getRupiah"
export const UpdateStatusVM = () => {
    return (
        <>
            <CardHeader>
                <CardTitle>Perubahan Status VM</CardTitle>
                <CardDescription>Isi data untuk mengisi spesifikasi VM yang akan dipakai</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <h4 className="font-bold">Status Lama</h4>
                <div className="grid grid-cols-2 gap-6">
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="old_vm_status">Status</Label>
                        <Select>
                            <SelectTrigger id="old_vm_status">
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
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="old_vm_status">Revenue</Label>
                        <div className="text-lg">{getRupiah(1000000)}</div>
                    </div>
                </div>

                <h4 className="font-bold">Status Baru</h4>
                <div className="grid grid-cols-2 gap-6">

                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="old_vm_status">Status</Label>
                        <Select>
                            <SelectTrigger id="old_vm_status">
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
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="old_vm_status">Revenue</Label>
                        <div className="text-lg">{getRupiah(1000000)}</div>
                    </div>
                </div>
            </CardContent>
        </>
    )
}