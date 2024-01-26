"use client";
import { LayananForm } from "./form/vm-type-name-form";
import { VMSpecificationForm } from "./form/vm-specification-form";
import { useMultiplestepForm } from "@/hooks/useMultipleForm";
import { HeaderStepper } from "@/ui/header-stepper";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationStep } from "../ui/navigation-step";
import { DeepPartial, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ContractForm } from "./form/contract-form";

const NetworkSchema = z.object({
  ip_public: z.string().optional(),
  ip_local: z.string(),
  port: z.coerce.number(),
  vpc_name: z.string(),
});

const PriceSchema = z.object({
  active_running_price: z.number(),
  active_stopped_price: z.number(),
});

const ContractSchema = z.object({
  contract_request_type_id: z.coerce.number(),
  contract_document_date: z.coerce.date(),
  deployement_date: z.coerce.date().optional(),
  contract_duration: z.coerce.number(),
  contract_expired: z.coerce.date(),
  request_based_type_id: z.coerce.number(),
  number_modification: z.string(),
  credential: z.string(),
});

const tambahVMSchema = z.object({
  project_id: z.number(),
  service_type_id: z.coerce.number(),
  vm_type_id: z.coerce.number(),
  name: z.string(),
  cpu: z.coerce.number(),
  memory: z.coerce.number(),
  hdd: z.coerce.number(),
  disk_type_id: z.coerce.number(),
  operating_system_id: z.coerce.number(),
  vm_status_id: z.coerce.number(),
  network: NetworkSchema,
  // VMSpecificationHistories: z.null(),
  // price: PriceSchema,
  purpose: z.string(),
  contract: ContractSchema,
  user_id: z.coerce.number()
});

export type TambahVMValues = z.infer<typeof tambahVMSchema>;

function onSubmit(data: TambahVMValues) {
  console.log(data);
}

export const TambahVM = () => {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
  } = useMultiplestepForm(4);

  const defaultValues: Partial<TambahVMValues> = {
    project_id: 1,
    user_id: 1,
    contract: {
      contract_request_type_id: 1,
      contract_document_date: new Date(), 
      contract_duration: 0, 
      contract_expired: new Date(),
      request_based_type_id: 0,
      number_modification: "", 
      credential: "",
    },
  }
  const form = useForm<TambahVMValues>({
    resolver: zodResolver(tambahVMSchema),
    mode: "onChange",
    defaultValues
  });

  return (
    <>
      <div className="flex flex-col gap-6 items-center">
        <HeaderStepper>
          <NavigationStep
            index={1}
            title="Kontrak"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={2}
            title="Layanan"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={3}
            title="Spesifikasi"
            currentStepIndex={currentStepIndex}
          />
          <NavigationStep
            index={4}
            title="Konfirmasi"
            currentStepIndex={currentStepIndex}
          />
        </HeaderStepper>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="w-full">
              {currentStepIndex === 1 && <ContractForm form={form} />}
              {currentStepIndex === 2 && <LayananForm form={form} />}
              {currentStepIndex === 3 && <VMSpecificationForm form={form} />}
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
