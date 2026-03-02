import { marketingManager } from "@/lib/managers/marketingManager"

export async function runOrchestrator(message: string) {
  return await marketingManager(message)
}
