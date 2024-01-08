'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayananManagement } from "../layanan-management"
import { VMManagement } from "../vm-management"
export const ManagementSection = ({children}: {children: React.ReactNode}) => {
    return (
        <Tabs defaultValue="layanan" className="flex flex-col">
            <div className="block">
            <TabsList>
                <TabsTrigger value="layanan">Layanan</TabsTrigger>
                <TabsTrigger value="virtual-manchines">Virtual Machines</TabsTrigger>
            </TabsList>
            </div>
            {children}
            {/* <TabsContent value="layanan">
                <LayananManagement />
            </TabsContent>
            <TabsContent value="virtual-manchines">
                <VMManagement />
            </TabsContent> */}
        </Tabs>
    )
}