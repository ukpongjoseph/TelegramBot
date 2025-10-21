// CREATING AN INSTANCE OF THE BOT SO IT CAN BE ACCESSIBLE EVERYWHERE NEEDED WITHOUT CREATING AN EXTRA UNNECESSARY INSTANCE OF THE BOT 

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
 module.exports = bot