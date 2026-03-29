import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function SettingsPage() {
  return (
    <DashboardShell
      eyebrow="System settings"
      title="Global controls for branches, permissions, and notifications"
      description="This module is designed for branch business hours, holidays, payment provider settings, offer visibility, global role permissions, and reusable notification templates."
    />
  );
}
