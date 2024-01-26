"use client";
import { CardLayoutForm } from "@/ui/card-layout-form";
import { NameValueItem } from "../../ui/name-value-item";
export const ConfirmationForm = ({ form }: any) => {
  return (
    <>
      <CardLayoutForm
        title="Konfirmasi Data"
        description="Mari Kita Buat Layanan"
        classnames="w-[350px]"
      >
        <div className="grid w-full gap-4 items-center">
          <NameValueItem name="Nama Layanan" value={form.getValues("service_name")} />
          <NameValueItem name="Nama Project" value={form.getValues("project_name")} />
          <NameValueItem name="GL Account" value={form.getValues("gl_account")} />
          <NameValueItem name="Segment" value={form.getValues("segment")} />
          <NameValueItem name="Site Location" value={form.getValues("site_location_id")} />
        </div>
      </CardLayoutForm>
    </>
  );
};
