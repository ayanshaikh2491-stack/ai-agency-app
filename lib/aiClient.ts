export async function callAI(prompt: string) {
  const response = await fetch(process.env.OPENAI_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })
  })

  const data = await response.json()
  return data.choices?.[0]?.message?.content || "No response"
}
