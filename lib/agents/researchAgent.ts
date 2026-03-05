import { groqChat } from "../lib/groq"
import { webSearch } from "../tools/webSearch"

export async function researchAgent(prompt: string){

  const searchResults = await webSearch(prompt)

  const systemPrompt = `
You are a professional research analyst.

Rules:
- Use real web data.
- Never invent facts.
- Provide sources.
- Think step by step.
`

  return groqChat(systemPrompt, `
Research this topic using web results:

${searchResults}

Task:
${prompt}
`)
}
