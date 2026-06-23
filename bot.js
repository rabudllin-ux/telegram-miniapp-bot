const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const { Telegraf } = require("telegraf");

console.log("TOKEN:", process.env.BOT_TOKEN ? "токен найден" : "токена нет");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    `Куда хочешь попасть?

<a href="https://serene-parfait-455b7e.netlify.app/?teacher=safyanov&screen=home">Страница Сафьянова</a>

<a href="https://serene-parfait-455b7e.netlify.app/?teacher=gorbachev&screen=home">Страница Горбачёва</a>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true
    }
  );
});

bot.launch();

console.log("Бот запущен");