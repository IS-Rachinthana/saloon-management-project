import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    phase1: [
      "Landing page",
      "Role-aware authentication",
      "Customer profiles",
      "Branch-based appointment flow",
      "Reception and manager dashboard"
    ],
    phase2: [
      "WhatsApp integration",
      "Loyalty automation",
      "Advanced analytics",
      "Campaign segmentation"
    ]
  });
}
