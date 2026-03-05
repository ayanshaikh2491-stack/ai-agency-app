export async function runManager(prompt: string) {

  const team = [
    {
      agent: "Research Agent",
      result: `Research started for: ${prompt}`
    },
    {
      agent: "SEO Agent",
      result: `Keyword strategy created for: ${prompt}`
    },
    {
      agent: "Marketing Agent",
      result: `Marketing campaign planning for: ${prompt}`
    }
  ]

  return team
}
