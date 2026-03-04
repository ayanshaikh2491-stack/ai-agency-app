import fetch from "node-fetch";

export async function commitToGithub(filePath: string, content: string) {

  const repo = "ayanshaikh2491-stack/ai-agency-app";
  const token = process.env.GITHUB_TOKEN;

  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

  const body = {
    message: "AI Manager update",
    content: Buffer.from(content).toString("base64"),
  };

  await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

}
