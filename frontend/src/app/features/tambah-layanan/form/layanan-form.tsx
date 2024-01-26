"use client";
import { Input } from "@/components/ui/input";
import { CardLayoutForm } from "@/ui/card-layout-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { TambahLayananValues } from "..";
import { FormInput } from "@/ui/form-input/form-input";

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

export const LayananForm = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Isi Layanan"
        description="Mari Kita Buat Layanan"
        classnames="w-[350px]"
      >
        <div className="grid w-full gap-4 items-center">
          <FormField
            control={form.control}
            name="service_name"
            defaultValue=""
            render={({ field }) => (
              <FormInput title="Nama Layanan" field={field} />
            )}
          />
          <FormField
            control={form.control}
            name="project_name"
            defaultValue=""
            render={({ field }) => (
              <FormInput title="Nama Projek" field={field} />
            )}
          />
        </div>
      </CardLayoutForm>
    </>
  );
};
