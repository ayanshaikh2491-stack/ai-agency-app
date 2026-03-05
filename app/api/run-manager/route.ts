import { runManager } from "@/lib/managerEngine"

export async function POST(req:Request){

const body = await req.json()

const result = await runManager(body.prompt)

return Response.json(result)

}
