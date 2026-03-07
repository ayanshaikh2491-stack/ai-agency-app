import { agents } from "./agentsConfig"
import { runAI } from "./aiClient"

export async function runAgent(agentKey:string,input:string){

const agent = agents[agentKey]

if(!agent){
return "Agent not found"
}

const result = await runAI(agent.prompt,input,agent.model)

return result

}
