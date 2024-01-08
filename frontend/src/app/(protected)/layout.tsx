export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        //   <div className='min-h-screen'>
        <div className="flex flex-col m-6">
            {children}
        </div>
        //   </div>
    )
}