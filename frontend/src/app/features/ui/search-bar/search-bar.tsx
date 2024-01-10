
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Search} from 'lucide-react'
export const SearchBar = () => {
    return (
        <>
            <Input />
            <Button variant={"outline"} size={"icon"}>
                <Search className="h-4 w-4" />
            </Button>
        </>
    )
}