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
import { FormInput } from "@/ui/form-input/form-input";
import { DropdownInput } from "../../ui/dropdown-input";

const siteLocation = [
  {
    id: 1,
    name: "neucentrix-karet",
  },
  {
    id: 2,
    name: "neucentrix-meruya",
  },
];

export const AdditionalForm = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Data Tambahan Layanan"
        description="Mari Kita Buat Layanan"
        classnames="w-[350px]"
      >
        <div className="grid w-full gap-4 items-center">
          <FormField
            control={form.control}
            name="gl_account"
            defaultValue=""
            render={({ field }) => (
              <FormInput title="GL Account" field={field} />
            )}
          />
          <FormField
            control={form.control}
            name="cost_center"
            defaultValue=""
            render={({ field }) => (
              <FormInput title="Cost Center" field={field} />
            )}
          />
          <FormField
            control={form.control}
            name="segment"
            defaultValue=""
            render={({ field }) => <FormInput title="Segment" field={field} />}
          />
          <FormField
            control={form.control}
            name="site_location_id"
            defaultValue={""}
            render={({ field }) => (
              <DropdownInput
                title="Site Location"
                field={field}
                placeholder={"Pilih Lokasi"}
              >
                {siteLocation.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropdownInput>
            )}
          />
          <FormField
            control={form.control}
            name="contact_id"
            defaultValue={""}
            render={({ field }) => (
              <DropdownInput
                title="Kontak yang bisa dihubungi"
                field={field}
                placeholder={"Pilih Kontak"}
              >
                {siteLocation.map((item, index) => (
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
