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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const LayananForm = ({nextStep} : {nextStep: () => void}) => {
    return (
        <Card className="w-[350px]" >
            <CardHeader>
                <CardTitle>Isi Layanan</CardTitle>
                <CardDescription>Mari Kita Buat Layanan</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4 items-center">
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="service_type">Tipe Layanan</Label>
                        <Select>
                            <SelectTrigger id="service_type">
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
                        <Label htmlFor="service_name">Nama Layanan</Label>
                        <Input id="service_name" placeholder="Isi nama Layanan" />
                    </div>
                    <div className="max-w-sm space-y-1.5">
                        <Label htmlFor="project_name">Nama Projek</Label>
                        <Input id="project_name" placeholder="Isi nama Projek" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={() => nextStep()}>Continue</Button>
            </CardFooter>
        </Card>
    )
}