export function buildTeam(goal: string): string[] {
  const text = goal.toLowerCase();

  if (text.includes("seo")) {
    return ["SEO Specialist", "Content Strategist", "Analytics Analyst"];
  }

  if (text.includes("website")) {
    return ["Web Architect", "UI Designer", "Conversion Expert"];
  }

  if (text.includes("ads") || text.includes("marketing")) {
    return ["Paid Ads Expert", "Funnel Builder", "Copy Strategist"];
  }

  return ["Growth Strategist", "Automation Expert"];
}
