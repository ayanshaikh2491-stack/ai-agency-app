export default async function researchAgent(prompt: string) {

  const result = `
Research Analysis

Topic: ${prompt}

Key Points:
- Market trends related to the topic
- Competitor insights
- Opportunities for growth
- Risks and challenges

Conclusion:
Further research and real data analysis recommended.
`

  return result
}
