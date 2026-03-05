import seoAgent from "../agents/seoAgent"

export async function seoManager(message: string) {

  const result = await seoAgent(message)

  return result

}
