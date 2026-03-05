export async function POST(req: Request){

const { message } = await req.json()

// simple manager logic

let reply = ""

if(message.toLowerCase().includes("website")){

reply = "Website Manager activated. I will assign a Website Designer agent."

}

else if(message.toLowerCase().includes("seo")){

reply = "SEO Manager activated. SEO team is preparing a strategy."

}

else if(message.toLowerCase().includes("marketing")){

reply = "Marketing Manager activated. Ads and Content agents are ready."

}

else{

reply = "AI Manager received your request. Assigning the best team."

}

return Response.json({
reply
})

}
