import {
  BellRing,
  CalendarClock,
  LayoutDashboard,
  MessageCircleHeart,
  Store,
  UsersRound
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Branches", href: "#branches" },
  { label: "Offers", href: "#offers" },
  { label: "Management", href: "#platform" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "3", label: "Branch-ready operations" },
  { value: "24/7", label: "Online booking access" },
  { value: "5 roles", label: "Staff permission layers" }
];

export const services = [
  {
    title: "Signature Coloring",
    description: "Custom color journeys, gloss treatments, and finish rituals tailored for premium salon visits."
  },
  {
    title: "Precision Haircuts",
    description: "Modern cuts for women, men, and teens with consultation-led styling and aftercare guidance."
  },
  {
    title: "Bridal & Event Styling",
    description: "Luxury styling sessions designed for weddings, parties, shoots, and milestone celebrations."
  },
  {
    title: "Hair Spa & Recovery",
    description: "Scalp rituals, nourishing masks, and restorative care programs for healthy long-term results."
  }
];

export const offers = [
  "Color + Treatment bundles with limited-time seasonal pricing",
  "Birthday beauty benefits for CRM-driven repeat visits",
  "Branch-led promotions and social-ready landing page highlights"
];

export const platformModules = [
  {
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    copy: "Track appointments, walk-ins, approvals, and front-desk actions from one responsive control center."
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    copy: "Prevent overlaps, respect leave and business hours, and support branch-aware stylist availability."
  },
  {
    icon: UsersRound,
    title: "Client CRM",
    copy: "Store profiles, photos, style references, birthday data, preferences, and visit history."
  },
  {
    icon: Store,
    title: "Multi-Branch Control",
    copy: "Manage services, staff, pricing, and performance across every salon branch without duplicate systems."
  },
  {
    icon: BellRing,
    title: "Notification Engine",
    copy: "Prepare for in-app, email, and WhatsApp reminders for bookings, offers, birthdays, and campaigns."
  },
  {
    icon: MessageCircleHeart,
    title: "Feedback & Offers",
    copy: "Collect bilingual feedback, promote products, and rotate branded banners across the customer journey."
  }
];

export const dashboardCards = [
  {
    title: "Reception View",
    metric: "18 bookings",
    detail: "Day board with walk-ins, approvals, chair allocation, and live queue handling."
  },
  {
    title: "Manager Snapshot",
    metric: "92% utilization",
    detail: "Branch staffing, leave approvals, top services, and peak hours in one place."
  },
  {
    title: "Customer Portal",
    metric: "10 photo slots",
    detail: "Profile images, haircut references, reminder preferences, and booking self-service."
  }
];

export const branches = [
  {
    name: "Colombo Signature Studio",
    hours: "Mon - Sun | 9.00 AM - 8.00 PM",
    focus: "Luxury coloring, premium consultations, and bridal finishing."
  },
  {
    name: "Kandy Style Lounge",
    hours: "Mon - Sat | 10.00 AM - 7.00 PM",
    focus: "Family cuts, modern styling, and spa recovery sessions."
  },
  {
    name: "Negombo Coastal Bar",
    hours: "Tue - Sun | 9.30 AM - 7.30 PM",
    focus: "Express services, seasonal offers, and product showcases."
  }
];

export const managementNav = [
  { title: "Overview", href: "/dashboard" },
  { title: "Appointments", href: "/dashboard/appointments" },
  { title: "Customers", href: "/dashboard/customers" },
  { title: "Staff", href: "/dashboard/staff" },
  { title: "Analytics", href: "/dashboard/analytics" },
  { title: "Settings", href: "/dashboard/settings" }
];

export const appointmentStatuses = [
  "Pending",
  "Approved",
  "Confirmed",
  "Checked In",
  "In Progress",
  "Completed"
];
