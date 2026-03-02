import { NextRequest, NextResponse } from "next/server"
import { runOrchestrator } from "@/lib/core/orchestrator"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message } = body

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 })
    }

    const result = await runOrchestrator(message)

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
