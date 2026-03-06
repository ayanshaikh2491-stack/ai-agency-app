import { NextResponse } from "next/server"
import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request) {

  try {

    const { message, manager } = await req.json()

    const result = await runManager(message, manager)

    return NextResponse.json(result)

  } catch (error) {

    return NextResponse.json({
      reply: "Manager failed to respond",
      team: []
    })

  }

}
