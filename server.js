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

// adding event listener to listen for messages. When the bot recieves a message, the callback function is triggered
bot.on('message', (msg) => {
    // creating a variable called chatId to hold the id of the message/chat. The chatId tells the bot where to reply back. it is more like the response destination
    const chatId = msg.chat.id
    if(msg.text === "/start"){
        bot.sendMessage(chatId, `Welcome, ${msg.from.first_name}`, 
        //setting up keyboard to control what users can send to the bot 
        // keyboard contains keys such as sendPicture, Hello and Hi which can send messages such as sendPicture, Hello and Hi respectively
        {
            "reply_markup" : {
                "keyboard" : [["displayPicture", "fetchProfilePicture"],   ["Hello"], ["bye"]]
            }
        })
    }
    if(msg.text.includes("bye")){
        const chatId = msg.chat.id
        bot.sendMessage(chatId, "Have a nice day, " + msg.from.first_name)
    }
})
// message handler for message with regex pattern
bot.onText(/\/?Hello/, (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, "Welcome dear User")
})
// message handler for bot to send its picture
bot.onText(/\/?displayPicture/, (msg) => {
    const chatId = msg.chat.id
    bot.sendPhoto(chatId, process.env.TELEGRAM_BOT_PIC, {caption : "Here is my picture/avatar"})
})
bot.onText(/\/?fetchProfilePicture/, async (msg) => {
    const userId = msg.from.id
    const chatId = msg.chat.id
    try {
        const userPhoto = await bot.getUserProfilePhotos(userId)
        // console.log(userPhoto)
        if(userPhoto.total_count === 0){
            return bot.sendMessage(chatId, "You do not have a profile Picture yet")
        }else{
            // console.log(userPhoto.photos[0][0])
            const profilePhoto = userPhoto.photos[0][0]
            const image = profilePhoto.file_id
            await bot.sendPhoto(chatId, image, {caption : "Here is your profile photo"})
        }
    } catch (error) {
        console.error(error)
    }
})