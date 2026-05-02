import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import fs from "fs"

let databuffer = fs.readFileSync("./SRS.pdf")

const parse = new PDFParse({
    data: databuffer
})

const data = await parse.getText()

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 10,
    chunkOverlap: 0
})

const chunks = await splitter.splitText(data.text)
console.log(chunks);