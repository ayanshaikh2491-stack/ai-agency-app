import TelegramBot from "node-telegram-bot-api";
import { runAgent } from "../ai/agentManager";

const token = process.env.TELEGRAM_TOKEN as string;
const admin = process.env.ADMIN_CHAT_ID as string;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {

  if (msg.chat.id.toString() !== admin) {
    return bot.sendMessage(msg.chat.id, "Unauthorized");
  }

  const text = msg.text || "";

  bot.sendMessage(msg.chat.id, "AI Manager thinking...");

  const result = await runAgent(text);

  bot.sendMessage(msg.chat.id, result || "No response");

});

console.log("Telegram AI Manager running...");
