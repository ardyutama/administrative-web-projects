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
export const ContactForm = ({nextStep} : {nextStep: () => void}) => {
    return (
        <>
            <CardHeader>
                <CardTitle>Isi Kontak</CardTitle>
                <CardDescription>Isikan Kontak Penanggung Jawab</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4 items-center">
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="contact_name">Name</Label>
                        <Input id="contact_name" placeholder="Isi Nama Kontak" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="phone">Nomer Telepon</Label>
                        <Input id="phone" placeholder="08xxxxx" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Isi Kontak Email" />
                    </div>
                </div>
            </CardContent>
            </>
    )
}