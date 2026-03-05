import { runAgent } from "./agentRouter"

export async function runManager(userPrompt: string) {

  const intent = await runAgent("manager", userPrompt)

  const tasks = intent.tasks || []

  let results: any[] = []

  for (const task of tasks) {

    const result = await runAgent(task.agent, task.prompt)

    results.push(result)

  }

  return results
}
