'use client'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
export default function ManagementLayout ({children}: {children: React.ReactNode}) {
    const router = useRouter()
    return (
        <Tabs defaultValue="layanan" className="flex flex-col">
            <div className="block">
            <TabsList>
                <TabsTrigger value="layanan" onClick={()=> router.push('/management/layanan')}>Layanan</TabsTrigger>
                <TabsTrigger value="virtual-machines" onClick={()=> router.push('/management/virtual-machines')}>Virtual Machines</TabsTrigger>
            </TabsList>
            </div>
            {children}
        </Tabs>
    )
}