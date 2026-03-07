hereimport { runAI } from "./aiClient"

export async function managerRouter(message:string){

const routerPrompt = `

You are an AI request router for a digital AI agency.

Your job is to analyze the user's request and decide which manager should handle the task.

Available managers:

website
seo
marketing
social
automation

Rules:

If user wants website, SaaS, ecommerce, landing page → website

If user wants ranking, SEO, blogs → seo

If user wants growth strategy, funnel → marketing

If user wants Instagram, YouTube, social growth → social

If user wants automation, workflow, AI systems → automation

Return ONLY the manager name.

Example outputs:

website
seo
marketing
social
automation

`

const manager = await runAI(routerPrompt,message,"llama-3.3-70b-versatile")

return manager.trim()

}
