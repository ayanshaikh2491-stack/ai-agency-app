import { runManager } from "@/lib/managerEngine"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const message = body.message

    const result = await runManager(message)

    return Response.json({
      success: true,
      data: result
    })

  } catch (error) {

    console.error(error)

    return Response.json({
      success: false,
      error: "AI manager failed"
    })

  }

}
