const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const { Telegraf } = require("telegraf");

console.log("TOKEN:", process.env.BOT_TOKEN ? "токен найден" : "токена нет");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  console.log("Нажали /start");
  ctx.reply("Привет! Бот работает ✅");
});

bot.on("message", (ctx) => {
  console.log("Пришло сообщение:", ctx.message.text);
  ctx.reply("Я получил сообщение ✅");
});

bot.launch();

console.log("Бот запущен");