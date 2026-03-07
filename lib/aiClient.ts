import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function runAI(
  systemPrompt: string,
  message: string,
  model: string
) {

  const completion = await groq.chat.completions.create({

    model: model,

    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: message
      }
    ],

    temperature: 0.6,
    max_tokens: 2000

  });

  return completion.choices[0].message.content;

}
