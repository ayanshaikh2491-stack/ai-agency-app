import { managers } from "./managersRegistry"

export async function runManager(prompt:string){

const lower = prompt.toLowerCase()

let team:any[] = []

if(lower.includes("marketing")){

const m = managers.marketing

team.push({
name:m.name,
role:m.role,
department:m.department,
intro:m.intro,
agents:m.agents
})

}

if(lower.includes("seo")){

const m = managers.seo

team.push({
name:m.name,
role:m.role,
department:m.department,
intro:m.intro,
agents:m.agents
})

}

if(lower.includes("website")){

const m = managers.web

team.push({
name:m.name,
role:m.role,
department:m.department,
intro:m.intro,
agents:m.agents
})

}

if(lower.includes("automation")){

const m = managers.automation

team.push({
name:m.name,
role:m.role,
department:m.department,
intro:m.intro,
agents:m.agents
})

}

return {
message:"AI Manager assigned the best department team.",
team
}

}
