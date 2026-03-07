import Groq from "groq-sdk"

const groq = new Groq({
apiKey: process.env.GROQ_API_KEY
})

export async function runAI(messages:any, model:string){

const chat = await groq.chat.completions.create({
messages,
model
})

return chat.choices[0].message.content

}
