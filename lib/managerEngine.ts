export async function runManager(message:string){

const text = message.toLowerCase()

// WEBSITE MANAGER
if(text.includes("website") || text.includes("build")){
return {
manager:"website",
reply:"Hi, I'm your Website Manager. I can build or copy websites.",
agents:[
{agent:"UI Designer"},
{agent:"Frontend Developer"},
{agent:"Backend Developer"}
]
}
}

// SEO MANAGER
if(text.includes("seo")){
return {
manager:"seo",
reply:"Hi, I'm your SEO Manager. I help websites rank on Google.",
agents:[
{agent:"Keyword Research Agent"},
{agent:"Technical SEO Agent"},
{agent:"Content Optimization Agent"}
]
}
}

// AUTOMATION MANAGER
if(text.includes("automation")){
return {
manager:"automation",
reply:"Hi, I'm your Automation Manager.",
agents:[
{agent:"Workflow Builder"},
{agent:"Zapier Integration"},
{agent:"Data Automation"}
]
}
}

// MARKETING MANAGER
if(text.includes("marketing")){
return {
manager:"marketing",
reply:"Hi, I'm your Marketing Manager.",
agents:[
{agent:"Marketing Strategy"},
{agent:"Campaign Planner"}
]
}
}

// FACEBOOK ADS MANAGER
if(text.includes("ads") || text.includes("facebook")){
return {
manager:"ads",
reply:"Hi, I'm your Facebook Ads Manager.",
agents:[
{agent:"Ad Copywriter"},
{agent:"Ad Targeting Expert"}
]
}
}

// SOCIAL MEDIA MANAGER
if(text.includes("instagram") || text.includes("social")){
return {
manager:"social",
reply:"Hi, I'm your Social Media Manager.",
agents:[
{agent:"Reels Creator"},
{agent:"Content Scheduler"}
]
}
}

// DEFAULT INTRO
return {
reply:"Hello, I'm the AI Operations Manager. Tell me what you want to build and I will assign the right manager."
}

}
