"use client";
import { Input } from "@/components/ui/input";

import { CardLayoutForm } from "@/ui/card-layout-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { DropdownInput } from "../../ui/dropdown-input";
import { FormInput } from "../../ui/form-input/form-input";

const serviceTypes = [
  {
    id: 1,
    name: "app",
  },
  {
    id: 2,
    name: "database",
  },
];

const VMTypes = [
  {
    id: 1,
    name: "VM",
  },
  {
    id: 2,
    name: "Load Balancer",
  },
];

export const LayananForm = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Isi Tipe dan Nama VM"
        description="Mari Kita Buat VM Baru untuk Projek"
        classnames="w-[350px]"
      >
        <div className="grid w-full gap-4 items-center">
          <FormField
            control={form.control}
            name="service_type_id"
            defaultValue=""
            render={({ field }) => (
              <DropdownInput title="Tipe Servis" field={field}>
                {serviceTypes.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropdownInput>
            )}
          />

          <FormField
            control={form.control}
            name="vm_type_id"
            defaultValue=""
            render={({ field }) => (
              <DropdownInput title="Tipe VM" field={field}>
                {VMTypes.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropdownInput>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            defaultValue=""
            render={({ field }) => <FormInput title="Nama VM" field={field} />}
          />

          <FormField
            control={form.control}
            name="purpose"
            defaultValue=""
            render={({ field }) => (
              <DropdownInput title="Peruntukkan" field={field}>
                {VMTypes.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropdownInput>
            )}
          />
        </div>
      </CardLayoutForm>
    </>
  );
};
