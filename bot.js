const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");

console.log("TOKEN:", process.env.BOT_TOKEN ? "токен найден" : "токена нет");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    "Куда хочешь попасть?",
    Markup.inlineKeyboard([
      [
        Markup.button.webApp(
          "Страница Сафьянова",
          "https://serene-parfait-455b7e.netlify.app/?teacher=safyanov&screen=home"
        )
      ],
      [
        Markup.button.webApp(
          "Страница Горбачёва",
          "https://serene-parfait-455b7e.netlify.app/?teacher=gorbachev&screen=home"
        )
      ]
    ])
  );
});

bot.launch();

console.log("Бот запущен");