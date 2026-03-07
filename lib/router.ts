import { runAI } from "./aiClient"

export async function managerRouter(message: string) {

const routerPrompt = `
You are an AI request router for an AI business agency.

Your job is to select the correct manager.

Managers available:

website → building websites, landing pages, SaaS, apps
seo → ranking websites, keywords, backlinks
marketing → ads, funnels, lead generation
social → Instagram, reels, content, growth
automation → workflow automation, CRM, integrations

Rules:

Return ONLY one word.

Possible answers:

website
seo
marketing
social
automation
`

const result = await runAI(
routerPrompt,
message,
)

return result.trim().toLowerCase()

}
