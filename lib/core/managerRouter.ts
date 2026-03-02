import { marketingManager } from "@/lib/managers/marketingManager"
import { seoManager } from "@/lib/managers/seoManager"
import { websiteManager } from "@/lib/managers/websiteManager"
import { automationManager } from "@/lib/managers/automationManager"

export async function routeManager(message: string, persona: string) {

  if (persona === "research") {
    return marketingManager(message)
  }

  if (persona === "seo") {
    return seoManager(message)
  }

  if (persona === "website") {
    return websiteManager(message)
  }

  if (persona === "automation") {
    return automationManager(message)
  }

  return "System running but no manager matched."
}
