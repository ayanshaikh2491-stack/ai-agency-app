import { callAI } from "@/lib/aiClient"

export async function strategyAgent(input: string) {
  const prompt = `
You are a marketing strategist.

Create:
- Positioning strategy
- Offer angle
- Funnel idea

Based on: ${input}
`
  return await callAI(prompt)
}
