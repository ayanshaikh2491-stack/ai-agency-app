export async function runManager(message:string,manager:string){

const text = message.toLowerCase()

if(manager==="website"){
return "Our development team will build your website. Do you want Shopify, Next.js, or WordPress?"
}

if(manager==="seo"){
return "First we will audit your website and find ranking opportunities."
}

if(manager==="automation"){
return "Tell me which workflow you want to automate."
}

if(manager==="marketing"){
return "What product are we promoting?"
}

if(manager==="ads"){
return "What is your ad budget and target audience?"
}

if(manager==="social"){
return "Which platform do you want to grow? Instagram, YouTube or TikTok?"
}

return "Tell me more about your project."

}
