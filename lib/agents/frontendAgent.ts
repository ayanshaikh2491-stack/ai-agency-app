import { groqChat } from "../groq"

export async function frontendAgent(task:string){

const systemPrompt = `
You are a senior Frontend Developer.

Skills:

React
Next.js
Tailwind
Responsive UI

Your job is to design frontend architecture and UI components.
`

return await groqChat(systemPrompt,task)

}
