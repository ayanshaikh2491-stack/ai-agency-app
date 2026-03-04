import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function runAgent(prompt: string) {

  try {

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are a senior AI execution agent working inside a digital agency.

Your job is to provide:
- structured answers
- actionable business solutions
- clear steps

Avoid generic explanations.
Focus on execution.
          `
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama3-70b-8192"
    });

    return completion.choices[0]?.message?.content;

  } catch (error) {

    console.error("AI Error:", error);

    return "AI Manager failed to process the request.";

  }

}
