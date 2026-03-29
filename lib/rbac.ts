export const rolePermissions = {
  CLIENT: [
    "profile.read.self",
    "profile.update.self",
    "booking.create",
    "booking.read.self",
    "feedback.create",
    "notification.read.self"
  ],
  HAIRDRESSER: [
    "appointment.read.assigned",
    "appointment.update.notes",
    "calendar.read.assigned"
  ],
  RECEPTIONIST: [
    "appointment.create.walkin",
    "appointment.update.status",
    "appointment.assign.staff",
    "customer.read.branch",
    "leave.read.branch"
  ],
  MANAGER: [
    "appointment.manage.branch",
    "employee.manage.branch",
    "leave.approve.branch",
    "service.manage.branch",
    "analytics.read.branch"
  ],
  SUPER_ADMIN: [
    "system.manage.all",
    "branch.manage.all",
    "offer.manage.all",
    "feedback.read.all",
    "analytics.read.all"
  ]
} as const;

export type RoleName = keyof typeof rolePermissions;
