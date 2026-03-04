import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function runAgent(prompt: string) {

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a senior AI software engineer working inside an AI agency. Provide structured implementation level output."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    model: "llama3-70b-8192"
  });

  return completion.choices[0]?.message?.content;
}
