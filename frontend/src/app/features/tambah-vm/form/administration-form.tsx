'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const AdministrationForm = () => {
    return (
       <>
            <CardHeader>
                <CardTitle>Isi Administrasi</CardTitle>
                <CardDescription>Isikan sesuai dengan Projek Sekarang</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4 items-center">
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="cost_center">Cost Center</Label>
                        <Input id="cost_center" placeholder="Isi Cost Center" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="gl_account">GL Account</Label>
                        <Input id="gl_account" placeholder="Isi nama Projek" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="segment">Segmen</Label>
                        <Input id="segment" placeholder="Isi nama Projek" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="site_location">Site Location</Label>
                        <Input id="site_location" placeholder="Isi nama Projek" />
                    </div>
                </div>
            </CardContent>
        </>
    )
}