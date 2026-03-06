import Groq from "groq-sdk"

export async function runManager(message: string, manager: string) {

  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY")
  }

  const groq = new Groq({
    apiKey
  })

  const teams:any = {

    seo:["SEO Specialist","Content Writer","Link Builder"],

    website:["Frontend Dev","Backend Dev","UI Designer"],

    automation:["Workflow Engineer","Integration Specialist"],

    marketing:["Ads Manager","SEO Specialist","Content Strategist"]

  }

  const team = teams[manager] || ["AI Specialist"]

  const prompt = `
You are an AI agency manager.

User request:
${message}

Explain how your team will execute it.

Team:
${team.join(", ")}
`

  const completion = await groq.chat.completions.create({

    messages:[
      {role:"system",content:"You are an AI agency manager"},
      {role:"user",content:prompt}
    ],

    model:"llama3-70b-8192"

  })

  const reply = completion.choices?.[0]?.message?.content || "No response"

  return {
    reply,
    team
  }

}
