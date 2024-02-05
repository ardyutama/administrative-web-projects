"use client";
import { Row } from "@tanstack/react-table";
import { VirtualMachineResponse } from "@/features/managements/type";
import { Separator } from "@/components/ui/separator";
import { LayoutDropdownTable } from "./layout";
import { NameValueItem } from "@/ui/name-value-item";

export const renderSubComponent = ({
  row,
}: {
  row: Row<VirtualMachineResponse>;
}) => {
  return (
    <>
      <div className="flex gap-4 px-6 py-4">
        <LayoutDropdownTable title="Network">
          <NameValueItem
            name="IP Public"
            value={row.original.Network.ip_public}
          />
          <NameValueItem
            name="IP Local"
            value={row.original.Network.ip_local}
          />
          <NameValueItem
            name="Port"
            value={row.original.Network.port.toString()}
          />
          <NameValueItem
            name="VPC Name"
            value={row.original.Network.vpc_name}
          />
        </LayoutDropdownTable>
        <div>
          <Separator orientation="vertical" />
        </div>
        <LayoutDropdownTable title="Contract">
          <NameValueItem
            name="No Modin"
            value={row.original.Contract.number_modification}
          />
          <NameValueItem name="GL Account" value={row.original.gl_account} />
          <NameValueItem name="Cost Center" value={row.original.cost_center} />
          <NameValueItem
            name="Dasar Permintaan"
            value={row.original.Contract.contract_request_type}
          />
          <NameValueItem
            name="Tanggal Permintaan"
            value={row.original.Contract.contract_document_date}
          />
          <NameValueItem
            name="Tanggal Deploy"
            value={row.original.Contract.deployement_date}
          />
          <NameValueItem
            name="Durasi"
            value={row.original.Contract.contract_duration}
          />
          <NameValueItem
            name="Expired"
            value={row.original.Contract.contract_expired}
          />
        </LayoutDropdownTable>
        <div>
          <Separator orientation="vertical" />
        </div>
        <LayoutDropdownTable title="Tipe">
          <NameValueItem
            name="Tipe Service"
            value={row.original.service_type}
          />
          <NameValueItem name="Tipe VM" value={row.original.vm_type} />
        </LayoutDropdownTable>
        <div>
          <Separator orientation="vertical" />
        </div>
        <LayoutDropdownTable title="Peruntukan">
          <NameValueItem name="Peruntukan" value={row.original.purpose} />
        </LayoutDropdownTable>
      </div>
    </>
  );
};
