import marketingAgent from "../agents/marketingAgent"

export async function marketingManager(message: string) {

  const result = await marketingAgent(message)

  return result

}
