import { NextResponse } from "next/server"
import { runorchestrator } from "@/lib/core/orchestrator"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = await runorchestrator(body.message)

    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Engine error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "AI Agency Engine Running"
  })
}
