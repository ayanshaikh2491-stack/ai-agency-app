export async function runManager(message: string) {

  const text = message.toLowerCase()

  // SEO TEAM
  if (text.includes("seo")) {
    return {
      reply: "Hello 👋 I'm Arjun, your SEO Manager. I will assemble the SEO team for your project.",
      agents: [
        { agent: "Keyword Research Agent" },
        { agent: "Technical SEO Agent" },
        { agent: "Content Optimization Agent" }
      ]
    }
  }

  // WEBSITE TEAM
  if (text.includes("website")) {
    return {
      reply: "Hello 👋 I'm Rohan, your Web Development Manager. I will coordinate the website team.",
      agents: [
        { agent: "Website Designer" },
        { agent: "Frontend Developer" },
        { agent: "Backend Developer" }
      ]
    }
  }

  // MARKETING TEAM
  if (text.includes("marketing")) {
    return {
      reply: "Hello 👋 I'm Nova, your Marketing Manager. I will assemble the marketing team.",
      agents: [
        { agent: "Ads Campaign Agent" },
        { agent: "Social Media Agent" },
        { agent: "Email Marketing Agent" }
      ]
    }
  }

  // DEFAULT INTRO
  return {
    reply: "Hello 👋 I'm the AI Operations Manager. Tell me what you want to build and I will assemble the right AI team."
  }
}
