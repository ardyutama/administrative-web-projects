'use client'
import { LayananForm } from "./form/layanan-form"
import { AdministrationForm } from "./form/administration-form"
import { VMSpecificationForm } from "./form/vm-specification-form"
import { ContactForm } from "./form/contact-form"
import { useMultiplestepForm } from "./hooks/useMultipleForm"
import { HeaderStepper } from "./stepper"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export const TambahVM = () => {
    const {
        previousStep,
        nextStep,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        steps,
        goTo,
        showSuccessMsg,
    } = useMultiplestepForm(4);

    return (
        <>
            <div className="flex flex-col gap-6 items-center">
                <HeaderStepper currentStepIndex={currentStepIndex} />
                <Card className="w-full">
                    {currentStepIndex === 1 && (
                        <LayananForm nextStep={nextStep} />
                    )}
                    {currentStepIndex === 2 && (
                        <AdministrationForm nextStep={nextStep} />
                    )}
                    {currentStepIndex === 3 && (
                        <VMSpecificationForm nextStep={nextStep} />
                    )}
                    {currentStepIndex === 4 && (
                        <ContactForm nextStep={nextStep} />
                    )}
                    <CardFooter className="flex justify-end gap-4">
                        <Button variant={"ghost"} onClick={() => previousStep()} disabled={isFirstStep}>Back</Button>
                        {isLastStep ? (
                            <Button onClick={() => nextStep()}>Submit</Button>
                        ) :
                            <Button onClick={() => nextStep()}>Continue</Button>
                        }
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}