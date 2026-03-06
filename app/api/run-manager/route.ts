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
- Talk with clients
- Understand their business needs
- Suggest correct agents (SEO, Website, Automation, Ads, Social)

Always reply naturally like a professional manager.
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

    console.error(error)

    return Response.json({
      reply: "AI manager failed to respond."
    })
  }
}
