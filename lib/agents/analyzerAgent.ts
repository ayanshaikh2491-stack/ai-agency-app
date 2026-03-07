import { runAI } from "@/lib/aiClient"

export async function analyzeAgent(input: string) {

const prompt = `
You are a business analyzer AI agent.

Your job is to analyze the user's business idea and explain what type of digital solution they need.

Keep answers short and clear.
`

const messages = [
{ role: "system", content: prompt },
{ role: "user", content: input }
]

return await runAI(messages, "llama-3.3-70b-versatile")

}
