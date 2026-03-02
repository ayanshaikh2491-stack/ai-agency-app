import { seoAgent } from "@/lib/agents/seoAgent"

export async function seoManager(message: string) {
  return seoAgent(message)
}
