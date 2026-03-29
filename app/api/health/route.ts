import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Saloon Hair Warna",
    status: "ok",
    stack: ["nextjs", "typescript", "tailwind", "prisma", "postgresql"],
    timestamp: new Date().toISOString()
  });
}
