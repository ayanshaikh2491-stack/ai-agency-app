export async function runAI(systemPrompt:string,message:string){

const response = await fetch("https://api.groq.com/openai/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${process.env.GROQ_API_KEY}`
},
body:JSON.stringify({
model:"llama-3.3-70b-versatile",
messages:[
{role:"system",content:systemPrompt},
{role:"user",content:message}
]
})
})

const data = await response.json()

return data.choices?.[0]?.message?.content || "No response from AI"

}
