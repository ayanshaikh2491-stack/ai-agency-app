export default async function seoAgent(prompt: string) {

  const result = `
SEO Strategy

Keyword Target:
${prompt}

Suggested Actions:
- Create optimized blog content
- Use long-tail keywords
- Improve internal linking
- Build backlinks

Expected Result:
Better search ranking and organic traffic growth.
`

  return result
}
