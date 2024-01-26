"use client";
import { useMultiplestepForm } from "@/hooks/useMultipleForm";
import { HeaderStepper } from "@/ui/header-stepper";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationStep } from "../ui/navigation-step";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { LayananForm } from "./form/layanan-form";
import { ConfirmationForm } from "./form/confirmation-form";
import { AdditionalForm } from "./form/additional-form";

const tambahLayananSchema = z.object({
  service_name: z.string(),
  project_name: z.string(),
  revenue: z.number(),
  gl_account: z.string(),
  segment: z.string(),
  site_location_id: z.coerce.number(),
  contact_id: z.coerce.number(),
});

export type TambahLayananValues = z.infer<typeof tambahLayananSchema>;

export const TambahLayanan = () => {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep
  } = useMultiplestepForm(3);

  const defaultValues: Partial<TambahLayananValues> = {
    revenue: 0
  };

  function onSubmit(data: TambahLayananValues) {
    console.log(data);
  }

  const form = useForm<TambahLayananValues>({
    resolver: zodResolver(tambahLayananSchema),
    mode: "onChange",
    defaultValues,
  });

  return (
    <>
      <div className="flex flex-col gap-6 items-center">
        <HeaderStepper>
          <NavigationStep
            index={1}
            title="Layanan"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={2}
            title="Informasi Tambahan"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={3}
            title="Konfirmasi"
            currentStepIndex={currentStepIndex}
          />
        </HeaderStepper>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="w-full">
              {currentStepIndex === 1 && <LayananForm form={form} />}
              {currentStepIndex === 2 && <AdditionalForm form={form} />}
              {currentStepIndex === 3 && <ConfirmationForm form={form} />}
              <CardFooter className="flex justify-end gap-4">
                <Button
                  variant={"ghost"}
                  onClick={() => previousStep()}
                  disabled={isFirstStep}
                >
                  Back
                </Button>
                {isLastStep ? (
                  <Button type="submit">Submit</Button>
                ) : (
                  <Button onClick={() => nextStep()}>Continue</Button>
                )}
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </>
  );
};
