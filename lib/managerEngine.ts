import { runAgent } from "./agentRouter"

export async function runManager(userPrompt: string) {

  let agentType = "research"

  const text = userPrompt.toLowerCase()

  if (text.includes("seo")) {
    agentType = "seo"
  }

  if (text.includes("marketing")) {
    agentType = "marketing"
  }

  const result = await runAgent(agentType, userPrompt)

  return result
}
