const bot = require("./botConfig")
// logging to the console for testing
console.log("Welcome")
const {start, Quiz, displayPicture, fetchProfilePicture} = require("./botServices/botServices")
// const {getAIResponse} = require("./openAIServices/openAI")

// adding event listener to listen for messages. When the bot recieves a message, the callback function is triggered
bot.on('message', start)
// message handler for message with regex pattern
bot.onText(/\/?Quiz/, Quiz)
// message handler for bot to send its picture
bot.onText(/\/?displayPicture/, displayPicture)
// message handler for bot to return user profilePicture
bot.onText(/\/?fetchProfilePicture/, fetchProfilePicture)
