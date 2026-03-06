import Groq from "groq-sdk"

export async function POST(req: Request) {

  try {

    const { message } = await req.json()

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    })

    const chat = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: `
You are an AI Agency Manager.

Your job:
Understand the user's business problem
Suggest the right agents
Reply professionally.
`
        },
        {
          role: "user",
          content: message
        }
      ]
    })

    return Response.json({
      reply: chat.choices[0].message.content
    })

  } catch (err) {

    console.error("AI ERROR:", err)

    return Response.json({
      reply: "AI manager failed to respond."
    })

  }

}
