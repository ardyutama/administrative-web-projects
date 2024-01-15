import {Card} from '@/ui/card'
import { DollarSign, Activity, Ban, MinusCircle } from 'lucide-react'
export default function Dashboard(){
    return(
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
            <Card title="Total Estimasi Tagihan" amount="Rp4000,000" unit="1042 Unit" icon={DollarSign} color="bg-white text-black" />
            <Card title="Total Active Running" amount="Rp4000,000" unit="1042 Unit" icon={Activity} color="bg-green-500 text-white" />
            <Card title="Total Active Stopped" amount="Rp4000,000" unit="1042 Unit" icon={Ban} color="bg-rose-500 text-white" />
            <Card title="Total Total Removed" amount="Rp4000,000" unit="1042 Unit" icon={MinusCircle} color="bg-neutral-100 text-black" />
            

                
            </div>
        </div>
    )
}