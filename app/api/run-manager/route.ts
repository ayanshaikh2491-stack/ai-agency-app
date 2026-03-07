import { NextResponse } from "next/server"
import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request){

const body = await req.json()

const result = await runManager(body.message, body.manager)

return NextResponse.json(result)

}
