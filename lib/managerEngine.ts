import { managerRouter } from "./router"

import { websiteManager } from "./managers/websiteManager"
import { seoManager } from "./managers/seoManager"
import { marketingManager } from "./managers/marketingManager"
import { socialMediaManager } from "./managers/socialMediaManager"
import { automationManager } from "./managers/automationManager"

export async function runManager(message: string) {

  const manager = await managerRouter(message)

  if (manager === "website") {
    return await websiteManager(message)
  }

  if (manager === "seo") {
    return await seoManager(message)
  }

  if (manager === "marketing") {
    return await marketingManager(message)
  }

  if (manager === "social") {
    return await socialMediaManager(message)
  }

  if (manager === "automation") {
    return await automationManager(message)
  }

  return "Manager not found."

}
