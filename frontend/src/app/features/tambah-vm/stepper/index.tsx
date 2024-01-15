import { NavigationStep } from "./navigation-step"

export const HeaderStepper = ({ currentStepIndex }: { currentStepIndex: number }) => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-6">
                <NavigationStep index={1} title="Layanan" currentStepIndex={currentStepIndex} />
                <NavigationStep index={2} title="Administrasi" currentStepIndex={currentStepIndex} />
                <NavigationStep index={3} title="Spesifikasi" currentStepIndex={currentStepIndex} />
                <NavigationStep index={4} title="Kontak" currentStepIndex={currentStepIndex} />
            </div>
        </div>
    )
}