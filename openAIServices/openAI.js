// Here we will be using openAI api model to generate questions based on subjects or categories provided by users. A set of 10 questions will be generated. After generation, users will be asked if they are done....then the answers will be sent back to users for self-evaluation
// We will be needing a function to generate questions, this function will take category as parameters and return questions an array of objects. Each objects will have questions, options and an answer

// const dotenv = require("dotenv")
// dotenv.config()
// const openAI = require("openai")
// const openai = new openAI({
//     apiKey : process.env.OPENAI_API_KEY
// })

// // category would come in as a parameter
// const getAIResponse = async(category) => {
//     try {
//         // create a prompt
//         const prompt = `generate a quiz of 5 questions on the topic, ${category}, with the response an array of objects. where each object contains the question, four option of answers and an answer to the question`
//         const response = await openai.chat.completions.create(
//             {
//                 messages : [{role : "system", content : prompt}],
//                 model : "gpt-3.5-turbo"
//             }
//         )
//         console.log(response)
//     } catch (error) {
//         console.error(error.message)
//     }
// }


// module.exports = {getAIResponse}