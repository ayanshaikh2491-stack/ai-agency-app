import { NextRequest, NextResponse } from "next/server"
import { runOrchestrator } from "@/lib/core/orchestrator"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { message } = body

  const result = await runOrchestrator(message)

  return NextResponse.json(result)
}
