import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function AnalyticsPage() {
  return (
    <DashboardShell
      eyebrow="Analytics"
      title="Revenue, utilization, and branch performance"
      description="The analytics area is prepared for daily, monthly, and yearly reporting across sales, service revenue, cancellation rates, repeat customers, branch comparisons, and employee utilization."
    />
  );
}
