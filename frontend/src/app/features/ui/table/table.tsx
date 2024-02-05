'use client'
import React from "react"
import {
    ColumnDef,
    Row,
    TableState,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    state?: Partial<TableState> | undefined
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
    getRowCanExpand?: (row: Row<TData>) => boolean;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    renderSubComponent,
    state,
    getRowCanExpand,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getRowCanExpand,
        state,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row,index) => {
                            return (
                                <React.Fragment key={index}>
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {row.getIsExpanded() && (
                                        <tr key={index}>
                                            {/* 2nd row is a custom 1 cell row */}
                                            <td colSpan={row.getVisibleCells().length}>
                                                {renderSubComponent ? renderSubComponent({ row }): ''}
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            )
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}