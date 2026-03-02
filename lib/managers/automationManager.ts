import { automationAgent } from "@/lib/agents/automationAgent"

export async function automationManager(message: string) {
  return automationAgent(message)
}
