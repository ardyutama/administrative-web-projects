import { Card } from "@/app/features/dashboard/card";

export const DashboardSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
        <Card amount={4000000} unit={1042} type="total" />
        <Card amount={4000000} unit={1042} type="active-running" />
        <Card amount={4000000} unit={1042} type="active-stopped" />
        <Card amount={4000000} unit={1042} type="total-removed" />
      </div>
    </div>
  );
};
