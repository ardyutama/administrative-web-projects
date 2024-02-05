'use client'
import { DataTable } from  "@/ui/table"
import { columns } from "./columns";
import { renderSubComponent } from "@/ui/table";
import { Suspense } from "react";
export const TableDetails = ({data}: {data:any}) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable
          columns={columns}
          data={data}
          getRowCanExpand={() => true}
          renderSubComponent={renderSubComponent}
        />
        </Suspense>
    )
}