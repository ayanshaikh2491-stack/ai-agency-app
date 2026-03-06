import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function runManager(message: string, manager: string) {

  const teams:any = {

    website:["Frontend Developer","Backend Developer","UI Designer"],

    automation:["Workflow Engineer","Integration Specialist","QA Automation"],

    marketing:["SEO Specialist","Ads Manager","Content Strategist"],

    design:["UI Designer","UX Researcher","Brand Designer"],

    research:["Market Analyst","Data Researcher","Trend Analyst"],

    operations:["Project Manager","Process Engineer","Support Agent"]

  }

  const team = teams[manager] || ["AI Specialist"]

  const prompt = `
You are the ${manager} manager of an AI agency.

User request:
${message}

Explain briefly how your team will execute the task.

Team members:
${team.join(", ")}
`

  const completion = await groq.chat.completions.create({

    messages: [
      { role: "system", content: "You are an AI agency manager." },
      { role: "user", content: prompt }
    ],

    model: "llama3-70b-8192"

  })

  return {

    reply: completion.choices[0].message.content,
    team

  }

}
