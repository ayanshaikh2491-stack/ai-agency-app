import { marketingAgent } from "../agents/marketingAgent"
import { researchAgent } from "../agents/researchAgent"
import { seoAgent } from "../agents/seoAgent"

export async function runAgent(type: string, prompt: string) {

  switch(type){

    case "marketing":
      return marketingAgent(prompt)

    case "research":
      return researchAgent(prompt)

    case "seo":
      return seoAgent(prompt)

    default:
      return "Agent not found"
  }

}
