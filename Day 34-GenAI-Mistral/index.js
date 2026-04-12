import readline from "readline/promises";
import "dotenv/config"
import {ChatMistralAI} from "@langchain/mistralai"
import { HumanMessage } from "langchain";


const rl = readline.createInterface({

   input: process.stdin,
   output: process.stdout,

});

const model = new ChatMistralAI({
    model: "mistral-small-latest",
})


while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")

    
    const response = await model.invoke("")


    console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`)
}


rl.close()