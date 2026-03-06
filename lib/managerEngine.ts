import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function runManager(message:string,manager:string){

try{

const completion = await groq.chat.completions.create({

model:"llama3-70b-8192",

messages:[
{
role:"system",
content:"You are an AI agency manager helping businesses."
},
{
role:"user",
content:message
}
]

})

return {
reply: completion.choices[0].message.content
}

}catch(e){

return {
reply:"AI service error"
}

}

}
