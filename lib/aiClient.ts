export async function callAI(
  systemPrompt: string,
  message: string,
  model: string = "llama-3.3-70b-versatile"
) {

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    })
  })

  const data = await res.json()

  return data.choices?.[0]?.message?.content || "No response from AI"
}￼Enter
