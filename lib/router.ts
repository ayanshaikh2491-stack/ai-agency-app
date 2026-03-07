import { runAI } from "./aiClient"

export async function managerRouter(message: string) {

const routerPrompt = `
You are an AI router for an AI agency.

Your job is to choose which manager should handle the request.

Managers:

website
seo
marketing
social
automation

Return ONLY the manager name.
`

const result = await runAI(
  routerPrompt,
  message,
  "llama-3.3-70b-versatile"
)

return result.trim().toLowerCase()

}
