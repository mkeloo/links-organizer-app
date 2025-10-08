import { NextResponse } from "next/server";

export async function GET() {
  console.log("✅ API route hit!");
  return NextResponse.json({ message: "API route executed successfully!" });
}
