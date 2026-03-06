import Groq from "groq-sdk"

export async function runManager(message: string, manager: string) {

  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    return {
      reply: "API key missing",
      team: []
    }
  }

  const groq = new Groq({ apiKey })

  const teams:any = {

    seo:["SEO Specialist","Content Writer","Link Builder"],

    website:["Frontend Developer","Backend Developer","UI Designer"],

    marketing:["Ads Manager","SEO Specialist","Content Strategist"],

    automation:["Workflow Engineer","Integration Specialist","QA Automation"]

  }

  const team = teams[manager] || ["AI Specialist"]

  try {

    const completion = await groq.chat.completions.create({

      model: "llama3-70b-8192",

      messages: [
        {
          role: "system",
          content: "You are an AI agency manager helping businesses."
        },
        {
          role: "user",
          content: `
User request: ${message}

Explain how your team will execute this task.

Team members:
${team.join(", ")}
`
        }
      ]

    })

    const reply =
      completion?.choices?.[0]?.message?.content ||
      "Manager could not generate response"

    return {
      reply,
      team
    }

  } catch (error:any) {

    console.error("GROQ ERROR:", error)

    return {
      reply: "AI service error",
      team
    }

  }

}
