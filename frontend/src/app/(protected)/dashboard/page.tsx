import {Card} from '@/ui/card'

export default function Dashboard(){
    return(
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}