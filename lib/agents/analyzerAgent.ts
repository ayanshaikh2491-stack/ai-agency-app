import { callAI } from "@/lib/aiClient"

export async function analyzerAgent(input: string) {
  const prompt = `
Improve clarity.
Make professional.
Keep concise.

Content:
${input}
`
  return await callAI(prompt)
}
