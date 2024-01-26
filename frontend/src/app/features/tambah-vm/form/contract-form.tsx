"use client";
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
import { DropdownInput } from "@/ui/dropdown-input";
import { FormInput } from "@/ui/form-input/form-input";

const requestBasedTypes = [
  {
    id: 1,
    name: "wa percepatan",
  },
  {
    id: 2,
    name: "memodinas",
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

export const ContractForm = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Isi Kontrak"
        description="Buat Kontrak untuk VM Baru"
        classnames="w-[350px]"
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
                {requestBasedTypes.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropdownInput>
            )}
          />
          <FormField
            control={form.control}
            name="number_modification"
            defaultValue=""
            render={({ field }) => (
              <FormInput title="Nomer Modin" field={field}/>
            )}
          />
        </div>
      </CardLayoutForm>
    </>
  );
};
