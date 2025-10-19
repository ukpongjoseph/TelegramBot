// importing the bot api
const TelegramBot = require("node-telegram-bot-api")
// importing dotenv to be able to access env variables
const dotenv = require("dotenv")
// configuring dotenv
dotenv.config()
// storing api token in a variable
const token = process.env.TELEGRAM_BOT_TOKEN
// creating a new telegram bot from the bot api using the api token
const bot = new TelegramBot(token, {polling : true})
// logging to the console for testing
console.log("Welcome")

// adding event listener to listen for messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if(msg.text === "/start"){
        bot.sendMessage(chatId, "Welcome user")
    }
})