export const LayoutDetail = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">{title}</div>
                <div className="inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8">
                    {children}
                </div>
            </div>
        </>
    )
}