import { NextResponse } from "next/server"
import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const message = body.message || ""
    const manager = body.manager || "seo"

    const result = await runManager(message, manager)

    return NextResponse.json(result)

  } catch (error:any) {

    console.error("API ERROR:", error)

    return NextResponse.json({
      reply: "Server error",
      team: []
    })

  }

}
