import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Car, Search } from 'lucide-react';
import { CardService } from "./card-service";
export const LayananManagement = () => {
    return (
        <>
            <h4 className="text-3xl font-semibold tracking-tight">
                Layanan Management
            </h4>
            <div className="w-full flex justify-center mt-6">
                <div className="w-2/4 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Input />
                        <Button variant={"outline"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                    <CardService />
                    <CardService />
                </div>
            </div>
        </>
    )
}