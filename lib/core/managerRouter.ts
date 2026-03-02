import { marketingManager } from "@/lib/managers/marketingManager"
import { seoManager } from "@/lib/managers/seoManager"
import { websiteManager } from "@/lib/managers/websiteManager"
import { automationManager } from "@/lib/managers/automationManager"

export async function routeManager(message: string, persona: string) {

  if (persona === "research" || message.includes("content")) {
    return marketingManager(message)
  }

  if (persona === "seo" || message.includes("rank")) {
    return seoManager(message)
  }

  if (persona === "website" || message.includes("website")) {
    return websiteManager(message)
  }

  if (persona === "automation" || message.includes("automate")) {
    return automationManager(message)
  }

  return "General strategy analysis running..."
}
