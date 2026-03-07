import { agents } from "./agentsConfig"

export function generateTeam(text:string){

const team:any[] = []

if(text.toLowerCase().includes("website")){
team.push(agents.designer)
team.push(agents.frontend)
team.push(agents.backend)
}

if(text.toLowerCase().includes("seo")){
team.push(agents.seo)
}

if(text.toLowerCase().includes("marketing")){
team.push(agents.marketing)
}

return team

}
