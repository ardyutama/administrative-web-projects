'use client'
import { LayananForm } from "./form/layanan-form"
import { AdministrationForm } from "./form/administration-form"
import { VMSpecificationForm } from "./form/vm-specification-form"
import { ContactForm } from "./form/contact-form"
import { useMultiplestepForm } from "./hooks/useMultipleForm"
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
        {currentStepIndex === 0 && (
            <LayananForm nextStep={nextStep}/>
        )}
        {currentStepIndex === 1 && (
            <AdministrationForm nextStep={nextStep}/>
        )}
        {currentStepIndex === 2 && (
            <VMSpecificationForm nextStep={nextStep}/>
        )}
        {currentStepIndex === 3 && (
            <ContactForm nextStep={nextStep}/>
        )}
        {/* <ContactForm /> */}
        </>
    )
}