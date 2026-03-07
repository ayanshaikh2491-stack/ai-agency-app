import { managerRouter } from "./router"

import { websiteManager } from "./managers/websiteManager"
import { seoManager } from "./managers/seoManager"
import { marketingManager } from "./managers/marketingManager"
import { socialMediaManager } from "./managers/socialMediaManager"
import { automationManager } from "./managers/automationManager"

export async function runManager(message:string, manager:string){

let reply = ""

if(manager === "website"){
reply = await websiteManager(message)
}

if(manager === "seo"){
reply = await seoManager(message)
}

if(manager === "marketing"){
reply = await marketingManager(message)
}

if(manager === "social"){
reply = await socialMediaManager(message)
}

if(manager === "automation"){
reply = await automationManager(message)
}

return {
reply,
team:[
{ name:"Aarav", role:"Frontend Developer" },
{ name:"Isha", role:"UI Designer" },
{ name:"Kabir", role:"Backend Developer" },
{ name:"Rohan", role:"QA Tester" }
]
}

}
