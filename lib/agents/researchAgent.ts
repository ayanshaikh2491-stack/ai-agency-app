import { callAI } from "@/lib/aiClient"

export async function researchAgent(input: string) {
  const prompt = `
You are a senior marketing research expert.

Analyze:
- Target audience
- Market opportunity
- Competitor gap

Business: ${input}
`
  return await callAI(prompt)
}
