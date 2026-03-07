import { managerPrompts } from "./managerPrompts"

export async function runManager(message:string,manager:string){

const prompt = managerPrompts[manager] || managerPrompts.website

const res = await fetch(
"https://api.groq.com/openai/v1/chat/completions",
{
method:"POST",
headers:{
"Authorization":`Bearer ${process.env.GROQ_API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"llama3-70b-8192",
messages:[
{
role:"system",
content:prompt
},
{
role:"user",
content:message
}
]
})
}
)

const data = await res.json()

return data.choices?.[0]?.message?.content || "Manager thinking..."

}
