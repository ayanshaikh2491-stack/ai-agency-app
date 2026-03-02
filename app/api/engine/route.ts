import { NextResponse } from "next/server"
import { runorchestrator } from "@/lib/core/orchestrator"

export async function POST(req: Request) {
  const body = await req.json()
  const { message, persona } = body

  const reply = await runorchestrator(message, persona)

  return NextResponse.json({ reply })
}
