import { routeManager } from "./managerRouter"

export async function runorchestrator(message: string, persona: string) {
  return routeManager(message, persona)
}
