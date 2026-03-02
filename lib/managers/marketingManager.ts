import { marketingAgent } from "@/lib/agents/marketingAgent"

export async function marketingManager(message: string) {
  return marketingAgent(message)
}
