import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
export const ButtonNavigation = ({ href,title }: {href: string, title: string}) => {
    return (
        <Button asChild>
            <Link href={href}>
                <PlusCircle className="mr-2 h-4 w-4" /> 
                {title}
            </Link>
        </Button>
    )
}