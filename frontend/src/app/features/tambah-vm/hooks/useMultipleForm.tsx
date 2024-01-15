'use client'

import { useState } from 'react'

export function useMultiplestepForm(steps: number) {
    const [currentStepIndex, setCurrentStepIndex] = useState(1);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const nextStep = () => {
        if (currentStepIndex < steps) {
            setCurrentStepIndex((i) => i + 1)
        }
        if (currentStepIndex === steps) {
            setShowSuccessMsg(true)
        }
    }

    const previousStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((i) => i - 1)
        }
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        steps,
        isFirstStep: currentStepIndex === 1,
        isLastStep: currentStepIndex === steps,
        showSuccessMsg,
        goTo,
        nextStep,
        previousStep
    }
}