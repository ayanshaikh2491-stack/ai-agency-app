import Groq from "groq-sdk"

const groq = new Groq({
 apiKey: process.env.GROQ_API_KEY
})

export async function runManager(message: string, manager: string) {

const managers: any = {

website: {
name: "Website Manager",
team: ["Frontend Developer","Backend Developer","UI Designer"]
},

automation: {
name: "Automation Manager",
team: ["Workflow Engineer","Integration Specialist","QA Automation"]
},

marketing: {
name: "Marketing Manager",
team: ["SEO Specialist","Ads Manager","Content Strategist"]
},

design: {
name: "Design Manager",
team: ["UI Designer","UX Researcher","Brand Designer"]
},

research: {
name: "Research Manager",
team: ["Market Analyst","Data Researcher","Trend Analyst"]
},

operations: {
name: "Operations Manager",
team: ["Project Manager","Process Engineer","Support Agent"]
}

}

const managerInfo = managers[manager]

const prompt = `
You are the ${managerInfo.name} of an AI agency.

User request:
${message}

Your team:
${managerInfo.team.join(", ")}

Reply like a professional manager explaining how your team will execute the task.
Keep it short and clear.
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
team: managerInfo.team
}

}
