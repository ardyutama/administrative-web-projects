export const NavigationStep = ({index, title, currentStepIndex} : {index: number, title: string, currentStepIndex: number}) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className={`rounded-full size-10 flex justify-center  items-center ${currentStepIndex == index ? "bg-black text-white": "bg-slate-100 text-black"}`}>
                {index}
            </div>
            <h4>{title}</h4>
        </div>
    )
}