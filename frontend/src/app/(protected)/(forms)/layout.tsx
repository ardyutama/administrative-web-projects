import { Header } from '@/features/ui/header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='justify-center flex items-center pt-8'>
            {children}
        </div>
    )
}