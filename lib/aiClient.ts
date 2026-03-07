hereexport async function callAI(systemPrompt:string,message:string,model:string){

const res = await fetch("https://api.groq.com/openai/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${process.env.GROQ_API_KEY}`
},

body:JSON.stringify({

model,

messages:[
{role:"system",content:systemPrompt},
{role:"user",content:message}
]

})

})

const data = await res.json()

return data.choices[0].message.content

}
