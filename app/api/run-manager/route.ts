import { NextResponse } from "next/server"
import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request) {

  const body = await req.json()

  const team = await runManager(body.message)

  return NextResponse.json({
    reply: team
  })

}
