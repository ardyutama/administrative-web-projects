import Image from "next/image"
import { DollarSign } from "lucide-react"
import React from "react";

export const Card = ({ title, amount, unit, icon, color }: { title: string, amount: string, unit: string, icon: any, color: string }) => {
    return (
        <div className={`rounded-xl border ${color}  shadow px-6 py-6 flex flex-col gap-2`}>
            <div className="flex flex-row justify-between items-center">
                <h3 className="text-sm font-semibold">{title}</h3>
                {icon && React.createElement(icon, { className: "h-4 w-4" })}
            </div>
            <div className="flex flex-col" >
                <div className="text-2xl font-bold">{amount}</div>
                <div className="text-base">{unit}</div>
            </div>
        </div>
    );
}
