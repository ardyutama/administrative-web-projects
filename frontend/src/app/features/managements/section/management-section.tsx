'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/router"
export const ManagementSection = ({children}: {children: React.ReactNode}) => {
    const router = useRouter()
    return (
        <Tabs defaultValue="layanan" className="flex flex-col">
            <div className="block">
            <TabsList>
                <TabsTrigger value="layanan" onClick={()=> router.push('/management/layanan')}>Layanan</TabsTrigger>
                <TabsTrigger value="virtual-manchines" onClick={()=> router.push('/management/layanan')}>Virtual Machines</TabsTrigger>
            </TabsList>
            </div>
            {children}
        </Tabs>
    )
}