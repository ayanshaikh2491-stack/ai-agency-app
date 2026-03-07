import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function runManager(message:string,manager:string){

try{

const completion = await groq.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"system",
content:`You are the ${manager} manager of an AI agency.

Rules:
- Respond short
- Use bullet points
- Give practical actions
- Do NOT give long paragraphs
- Ask one question to continue conversation
`
},
{
role:"user",
content:message
}
]

})

const reply =
completion?.choices?.[0]?.message?.content ||
"Let me think about this. Can you give more details?"

return { reply }

}catch(e){

console.log(e)

return {
reply:"Something went wrong. Please try again."
}

}

}
