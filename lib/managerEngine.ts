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
content:`

You are the ${manager} manager of an AI execution agency.

Your job is to help users:

• clone existing websites
• build digital products
• create SaaS tools
• execute startup ideas

Rules:

1. First introduce yourself briefly.
2. Then respond to the user request.
3. Give clear action steps.
4. DO NOT talk about domain or hosting.
5. Focus on building and cloning products.
6. Keep answers short and structured.

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
"Tell me more about the product you want to build."

return { reply }

}catch(e){

console.log(e)

return {
reply:"Something went wrong."
}

}

}
