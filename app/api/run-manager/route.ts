import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function POST(req: Request) {

  try {

    const { message } = await req.json()

    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: `
You are an AI Agency Manager.

Your job:
- Understand the user's business problem
- Respond like a professional manager
- Suggest which agents are needed

Agents available:
Website Agent
SEO Agent
Automation Agent
Marketing Agent
Ads Agent
Social Media Agent

Always respond conversationally.
`
        },
        {
          role: "user",
          content: message
        }
      ]
    })

    return Response.json({
      reply: completion.choices[0].message.content
    })

  } catch (error) {

    console.error("API ERROR:", error)

    return Response.json({
      reply: "AI manager failed to respond."
    })

  }

}
