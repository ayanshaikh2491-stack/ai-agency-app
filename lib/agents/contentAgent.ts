import { callAI } from "@/lib/aiClient"

export async function contentAgent(input: string) {
  const prompt = `
Create:
- Instagram content plan
- Hooks
- Captions
- CTA

Based on: ${input}
`
  return await callAI(prompt)
}
