import { NextResponse } from "next/server"
import { runOrchestrator } from "@/lib/core/orchestrator"

export async function POST(req: Request) {
  const body = await req.json()
  const { message, persona } = body

  const response = await runOrchestrator(message, persona)

  return NextResponse.json({ reply: response })
}
