import { routeManager } from "./managerRouter"

export async function runOrchestrator(
  message: string,
  persona: string
) {
  return routeManager(message, persona)
}
