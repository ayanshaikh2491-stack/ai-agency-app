import { researchAgent } from "@/lib/agents/researchAgent"
import { strategyAgent } from "@/lib/agents/strategyAgent"
import { contentAgent } from "@/lib/agents/contentAgent"
import { analyzerAgent } from "@/lib/agents/analyzerAgent"

export async function marketingManager(message: string) {
  const research = await researchAgent(message)
  const strategy = await strategyAgent(research)
  const content = await contentAgent(strategy)
  const finalOutput = await analyzerAgent(content)

  return {
    research,
    strategy,
    content,
    finalOutput
  }
}
