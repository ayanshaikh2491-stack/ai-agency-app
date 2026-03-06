import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request){

 const { message } = await req.json()

 const reply = await runManager(message)

 return Response.json({
  reply: reply
 })

}