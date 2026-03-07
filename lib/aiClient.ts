import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function runAI(systemPrompt: string, message?: string, model?: string) {
  const userMessage = message ? `${systemPrompt}\n${message}` : systemPrompt
  const completion = await groq.chat.completions.create({
    model: model || "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: userMessage
      }
    ]
  })
  return completion.choices?.[0]?.message?.content || "No response"
}

export async function callAI(message: string) {
  return runAI(message)
}

export async function askAI(message: string) {
  return runAI(message)
}
