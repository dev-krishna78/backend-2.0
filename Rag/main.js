import dotenv from "dotenv"
dotenv.config({ 
    path: ['.env.local', '.env'] 
});

import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import fs from "fs"

let databuffer = fs.readFileSync("./SRS.pdf")

const parse = new PDFParse({
    data: databuffer
})

const data = await parse.getText()

const embeddings = new MistralAIEmbeddings({
    apiKey:process.env.MISTRAL_API_KEY,
    model: "mistral-embed"
})

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 0
})

const chunks = await splitter.splitText(data.text);

const docs = await embeddings.embedDocuments(chunks);

console.log(docs);