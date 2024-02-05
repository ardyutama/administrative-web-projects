import { DollarSign, Activity, Ban, MinusCircle } from "lucide-react";

type StatusType =
  | "total"
  | "active-running"
  | "active-stopped"
  | "removed";

export const getStatusType = (type: StatusType) => {
  switch (type) {
    case "total":
      return {
        icon: DollarSign,
        label: "Estimasi Tagihan",
        color: "white",
      };
    case "active-running":
      return {
        icon: Activity,
        label: "Active-Running",
        color: "green-500 ",
      };
    case "active-stopped":
      return {
        icon: Ban,
        label: "Active-Stopped",
        color: "red-500 ",
      };
    case "removed":
      return {
        icon: MinusCircle,
        label: "Removed",
        color: "neutral-100 ",
      };
    default: {
      return {
        icon: DollarSign,
        label: "Estimasi Tagihan",
        color: "white",
      };
    }
  }
};
