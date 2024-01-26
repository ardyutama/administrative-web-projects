
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
export const SearchBar = () => {
    return (
        <div className="flex gap-4 max-w-md w-full">
            <Input />
            <Button variant={"outline"} size={"icon"}>
                <Search className="h-4 w-4" />
            </Button>
        </div>
    )
}