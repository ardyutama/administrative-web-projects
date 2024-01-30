import { getRupiah } from "@/hooks/getRupiah";
import React from "react";
import { getStatusType } from "@/hooks/getStatus";
type Card = {
  amount: number;
  unit: number;
  type: "total" | "active-running" | "active-stopped" | "total-removed";
};

export const Card = ({ amount, unit, type }: Card) => {
  const { icon, color, label } = getStatusType(type);
  return (
    <div
      className={`rounded-xl border bg-${color} ${
        type == "active-running" || type == "active-stopped"
          ? "text-white"
          : "text-black"
      } shadow-${color} px-6 py-6 flex flex-col gap-2`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-sm font-semibold">Total {label}</h3>
        {icon && React.createElement(icon, { className: "h-4 w-4" })}
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{getRupiah(amount)}</div>
        <div className="text-base">{unit} VM Unit</div>
      </div>
    </div>
  );
};
