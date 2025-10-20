const bot = require("../botConfig")

const start = async (msg) => {
    try {
    // creating a variable called chatId to hold the id of the message/chat. The chatId tells the bot where to reply back. it is more like the response destination
    const chatId = msg.chat.id
    if(msg.text === "/start"){
        bot.sendMessage(chatId, `Welcome, ${msg.from.first_name}`, 
        //setting up keyboard to control what users can send to the bot 
        // keyboard contains keys such as sendPicture, Hello and Hi which can send messages such as sendPicture, Hello and Hi respectively
        {
            "reply_markup" : {
                "keyboard" : [["displayPicture", "fetchProfilePicture"],   ["Quiz"], ["bye"]]
            }
        })
    }
    if(msg.text.includes("bye")){
        const chatId = msg.chat.id
        bot.sendMessage(chatId, "Have a nice day, " + msg.from.first_name)
    }
    } catch (error) {
        console.error(error.message)
    }
}

const Quiz = async (msg) => {
    try {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, "Are you ready for a dev quiz ?", {
        reply_markup : {
            inline_keyboard : [
                [{text : "Start Quiz", callback_data : "start quiz"}]
            ]
        }
    })
    } catch (error) {
        console.error(error.message)
    }
}

const displayPicture = async (msg) => {
    try {
        const chatId = msg.chat.id
        bot.sendPhoto(chatId, process.env.TELEGRAM_BOT_PIC, {caption : "Here is my picture/avatar"})
    } catch (error) {
        console.error(error.message)
    }
}

const fetchProfilePicture = async (msg) => {
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
}

module.exports = {start, Quiz, displayPicture, fetchProfilePicture}