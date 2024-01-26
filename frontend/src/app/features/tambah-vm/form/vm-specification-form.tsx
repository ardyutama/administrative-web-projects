"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { format, add } from "date-fns";
import { SelectItem } from "@/components/ui/select";
import { FormField, FormLabel } from "@/components/ui/form";

import { CardLayoutForm } from "@/ui/card-layout-form";
import { getRupiah } from "@/hooks/getRupiah";
import { useEffect, useState } from "react";
import { DropdownInput } from "@/ui/dropdown-input";
import { FormInput } from "@/ui/form-input/form-input";
import { DateInput } from "@/ui/date-input/date-input";
import { VMStatusTypes, DiskTypes, OSTypes, pricesTypes } from "../../mock";
export const VMSpecificationForm = ({ form }: any) => {
  const [contractDurationMonth, setContractDurationMonth] =
    useState<string>("0");
  const [contractDurationDay, setContractDurationDay] = useState<string>("0");
  const [startDate, setStartDate] = useState<string>();

  let price = 90000;

  function getTotalDay() {
    return (
      parseInt(contractDurationMonth?.toString() || "0") * 30 +
      parseInt(contractDurationDay?.toString() || "0")
    );
  }

  function addDateByDay(date: string, value: number) {
    return add(date, {
      days: value,
    });
  }

  useEffect(() => {
    if (
      form.getValues("contract.contract_document_date") &&
      contractDurationMonth &&
      contractDurationDay
    ) {
      const startDate = form.getValues("contract.contract_document_date");
      const totalDays = getTotalDay();
      const expirationDate = format(addDateByDay(startDate, totalDays), "P");
      form.setValue("contract.contract_duration", totalDays);
      form.setValue("contract.contract_expired", expirationDate);
    }
  }, [contractDurationMonth, contractDurationDay, startDate, form]);

  const handleDateSelect = (date: any) => {
    let newDate = format(date, "P");
    setStartDate(newDate);
    form.setValue("contract.contract_document_date", newDate);
  };

  return (
    <>
      <CardLayoutForm
        title="Isi Spesifikasi VM"
        description="Isi data untuk mengisi spesifikasi VM yang akan dipakai"
        classnames="w-[500px]"
      >
        <div className="grid w-full gap-4 items-center">
          <div className="w-1/2 space-y-1.5">
            <FormField
              control={form.control}
              name="vm_status_id"
              defaultValue=""
              render={({ field }) => (
                <DropdownInput
                  title="Status VM"
                  field={field}
                  placeholder="Pilih Status VM"
                >
                  {VMStatusTypes.map((item, index) => (
                    <SelectItem key={index} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </DropdownInput>
              )}
            />
          </div>

          <h4 className="text-xl font-semibold">Spesifikasi</h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <FormField
              control={form.control}
              name="cpu"
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  title="CPU"
                  number
                  placeholder="ex. 1 Core"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="memory"
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  title="Memory"
                  number
                  field={field}
                  placeholder="ex. 1 GB"
                />
              )}
            />

            <FormField
              control={form.control}
              name="hdd"
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  title="HDD Size"
                  number
                  field={field}
                  placeholder="ex. 1 GB"
                />
              )}
            />

            <FormField
              control={form.control}
              name="disk_type_id"
              defaultValue=""
              render={({ field }) => (
                <DropdownInput
                  title="Tipe Hardisk"
                  placeholder="Pilih Salah Satu"
                  field={field}
                >
                  {DiskTypes.map((item, index) => (
                    <SelectItem key={index} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </DropdownInput>
              )}
            />

            <FormField
              control={form.control}
              name="operating_system_id"
              defaultValue=""
              render={({ field }) => (
                <DropdownInput
                  title="Operating System"
                  placeholder="Pilih Salah Satu"
                  field={field}
                >
                  {OSTypes.map((item, index) => (
                    <SelectItem key={index} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </DropdownInput>
              )}
            />
          </div>
          <h4 className="text-xl font-semibold">Network</h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <FormField
              control={form.control}
              name="network.ip_public"
              defaultValue=""
              render={({ field }) => (
                <FormInput title="IP Public" field={field} />
              )}
            />

            <FormField
              control={form.control}
              name="network.ip_local"
              defaultValue=""
              render={({ field }) => (
                <FormInput title="IP Local" field={field} />
              )}
            />

            <FormField
              control={form.control}
              name="network.port"
              defaultValue=""
              render={({ field }) => (
                <FormInput title="Port" field={field} number />
              )}
            />

            <FormField
              control={form.control}
              name="network.vpc_name"
              defaultValue=""
              render={({ field }) => (
                <FormInput title="VPC Name" field={field} />
              )}
            />
          </div>

          <h4 className="text-xl font-semibold">Contract</h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <FormField
              control={form.control}
              name="contract.contract_document_date"
              render={({ field }) => (
                <DateInput field={field} title="Tanggal Dokumen" />
              )}
            />
            <div className="space-y-2">
              <FormLabel>Duration</FormLabel>
              <div className="flex gap-2">
                <Input
                  id="contract_duration_month"
                  placeholder="Bulan"
                  value={contractDurationMonth}
                  type="number"
                  defaultValue={"0"}
                  onChange={(e) => setContractDurationMonth(e.target.value)}
                />
                <Input
                  id="contract_duration_day"
                  placeholder="Hari"
                  type="number"
                  defaultValue={"0"}
                  value={contractDurationDay}
                  onChange={(e) => setContractDurationDay(e.target.value)}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="contract.deployement_date"
              render={({ field }) => (
                <DateInput field={field} title="Tanggal Deploy" />
              )}
            />

            <FormField
              control={form.control}
              name="contract.contract_expired"
              render={({ field }) => (
                <DateInput field={field} title="Tanggal Expired" disabled />
              )}
            />
          </div>
          <div>
            <Label htmlFor="price">Price Estimation</Label>
            <div className="flex flex-col pt-2">
              <div className="text-xl font-bold">{getRupiah(price)}</div>
            </div>
          </div>
        </div>
      </CardLayoutForm>
    </>
  );
};
