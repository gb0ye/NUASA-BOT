const {Telegraf} = require("telegraf")
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply("Hello")
})

bot.on(message("text"), (ctx) => {
    ctx.reply("Hello you typed a text")
})

bot.launch()