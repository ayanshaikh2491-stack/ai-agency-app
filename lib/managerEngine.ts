import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function runManager(message:string, manager:string){

try{

const completion = await groq.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"system",
content:`You are the ${manager} manager of an AI agency helping businesses.`
},
{
role:"user",
content:message
}
]

})

const reply =
completion?.choices?.[0]?.message?.content ||
"Manager thinking..."

return{
reply
}

}catch(e){

console.log("GROQ ERROR:",e)

return{
reply:"AI service error"
}

}

}
