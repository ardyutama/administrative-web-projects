'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"

export const ButtonNavigate = ({href, children} : {href: string, children: React.ReactNode}) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(href)}>
            {children}  
        </Button>
    )
}