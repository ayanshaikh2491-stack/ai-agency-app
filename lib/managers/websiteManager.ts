import { websiteAgent } from "@/lib/agents/websiteAgent"

export async function websiteManager(message: string) {
  return websiteAgent(message)
}
