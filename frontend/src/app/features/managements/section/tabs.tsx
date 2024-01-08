'use client'
import { LayananManagement } from "../layanan-management"
import { VMManagement } from "../vm-management"
import { TabsContent } from "@/components/ui/tabs"
export const Tabs = () => {
    return (
        <>
            <TabsContent value="layanan">
                <LayananManagement />
            </TabsContent>
            <TabsContent value="virtual-manchines">
                <VMManagement />
            </TabsContent>
        </>
    )
}
