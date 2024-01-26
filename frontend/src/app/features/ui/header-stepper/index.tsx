export const HeaderStepper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-6">
                {children}
            </div>
        </div>
    )
}