"use client";
import { CardLayoutForm } from "@/ui/card-layout-form";
import { FormField } from "@/components/ui/form";
import { DropdownInput } from "@/ui/dropdown-input";
import { FormInput } from "@/ui/form-input/form-input";

export const UpdateVM = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Update VM"
        description="Isi administrasi dengan Update VM"
      >
        <div className="grid w-full gap-4 items-center">
          <FormField
            control={form.control}
            name="request_based_type_id"
            render={({ field }) => (
              <DropdownInput
                title="Tipe Dasar Permintaan"
                placeholder="Pilih Salah Satu"
                field={field}
              >
                <div></div>
                {/* {requestBased.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))} */}
              </DropdownInput>
            )}
          />
          <FormField
            control={form.control}
            name="request_based_type_id"
            render={({ field }) => (
              <FormInput
                title="No Modin"
                placeholder="Isi dengan memodinas"
                field={field}
              />
            )}
          />
          <FormField
            control={form.control}
            name="contract_request_type_id"
            render={({ field }) => (
              <DropdownInput
                title="Tipe Request Permintaan"
                placeholder="Pilih Salah Satu"
                field={field}
              >
                <div></div>
                {/* {requestBased.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))} */}
              </DropdownInput>
            )}
          />
        </div>
      </CardLayoutForm>
    </>
  );
};
