"use client";
import { useMultiplestepForm } from "@/hooks/useMultipleForm";
import { HeaderStepper } from "@/ui/header-stepper";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationStep } from "@/ui/navigation-step";
import { UpdateVM } from "./form/update-form";
import { UpdateSpecificationForm } from "./form/update-vm-specification-form";
import { UpdateDuration } from "./form/update-duration";
import { UpdateStatusVM } from "./form/update-status-vm";
export const EditVM = () => {
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
        <HeaderStepper>
          <NavigationStep
            index={1}
            title="Update"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={2}
            title="Edit"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={3}
            title="Confirmation"
            currentStepIndex={currentStepIndex}
          />
        </HeaderStepper>
        <Card className="w-full">
          {/* {currentStepIndex === 1 && (
                        <UpdateVM />
                    )} */}
          {currentStepIndex === 2 && (
            // <UpdateSpecificationForm />
            // <UpdateDuration />
            <UpdateStatusVM />
          )}
          {/* {currentStepIndex === 3 && (
                        <VMSpecificationForm />
                    )} */}
          <CardFooter className="flex justify-end gap-4">
            <Button
              variant={"ghost"}
              onClick={() => previousStep()}
              disabled={isFirstStep}
            >
              Back
            </Button>
            {isLastStep ? (
              <Button onClick={() => nextStep()}>Submit</Button>
            ) : (
              <Button onClick={() => nextStep()}>Continue</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
