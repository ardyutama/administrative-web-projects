import { Card } from "@/app/features/dashboard/card";

async function getTotalRevenue() {
  const res = await fetch(`${process.env.API_ROUTE}/total-revenue`);
  return res.json();
}

async function getActiveRunningRevenue() {
  const res = await fetch(`${process.env.API_ROUTE}/active-running-revenue`);
  return res.json();
}

async function getActiveStoppedRevenue() {
  const res = await fetch(`${process.env.API_ROUTE}/active-stopped-revenue`);
  return res.json();
}

export const DashboardSection = async () => {
  const totalRevenue = getTotalRevenue();
  const activeRunningRevenue = getActiveRunningRevenue();
  const activeStoppedRevenue = getActiveStoppedRevenue();
  const [total, activeRunning, activeStopped] = await Promise.all([
    totalRevenue,
    activeRunningRevenue,
    activeStoppedRevenue,
  ]);
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
        <Card amount={total.revenue} unit={total.total_vm} type="total" />
        <Card
          amount={activeRunning.revenue}
          unit={activeRunning.total_vm}
          type="active-running"
        />
        <Card
          amount={activeStopped.revenue}
          unit={activeStopped.total_vm}
          type="active-stopped"
        />
        <Card amount={4000000} unit={1042} type="total-removed" />
      </div>
    </div>
  );
};
