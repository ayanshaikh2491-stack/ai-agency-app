import { runManager } from "@/lib/managerEngine"

export async function POST(req:Request){

try{

const {message,manager} = await req.json()

const result = await runManager(message,manager)

return Response.json({reply:result})

}catch(e){

return Response.json({
reply:"AI manager failed to respond"
})

}

}
