'use client'
import { DataTable } from "./data-table"
import { columns } from "./columns";
// import { data } from "./mock-data";
import { renderSubComponent } from "./subcomponent";
export const TableDetails = ({data}: {data:any}) => {
    console.log(data)
    return (
        <DataTable
          columns={columns}
          data={data.VMSpecifications}
          getRowCanExpand={() => true}
          renderSubComponent={renderSubComponent}
        />
    )
}