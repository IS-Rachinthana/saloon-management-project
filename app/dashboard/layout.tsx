import { DashboardFrame } from "@/components/dashboard/dashboard-frame";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardFrame>{children}</DashboardFrame>;
}
