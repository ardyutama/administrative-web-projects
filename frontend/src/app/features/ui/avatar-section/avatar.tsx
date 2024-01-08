'use client'
import { AvatarFallback, Avatar } from "@/components/ui/avatar"

export const AvatarSection = () => {
    return (
        <Avatar>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}