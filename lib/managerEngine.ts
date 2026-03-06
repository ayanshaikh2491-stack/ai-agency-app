export async function runManager(message:string){

 const text = message.toLowerCase()

 if(text.includes("seo")){

  return "Hello 👋 I'm Arjun, your SEO Manager. I will assign the SEO team to handle keyword research and optimization."

 }

 if(text.includes("website")){

  return "Hello 👋 I'm Rohan, your Web Development Manager. I will assemble the website design team."

 }

 if(text.includes("marketing")){

  return "Hello 👋 I'm Nova, your Marketing Manager. I will deploy the marketing agents."

 }

 return "Hello 👋 I'm the AI Operations Manager. Tell me what you want to build and I will assemble the right AI team."

}
export async function runManager(message:string){

 const text = message.toLowerCase()

 if(text.includes("seo")){

  return JSON.stringify([
   {agent:"Keyword Research Agent"},
   {agent:"Technical SEO Agent"},
   {agent:"Content Optimization Agent"}
  ])

 }

 return "Hello 👋 I'm the AI Manager. Tell me your project."

}l