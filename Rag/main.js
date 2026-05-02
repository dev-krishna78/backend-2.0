import { PDFParse } from "pdf-parse";
import fs from "fs"

let databuffer = fs.readFileSync("./SRS.pdf")

const parse = new PDFParse({
    data: databuffer
})

const data = await parse.getText()
console.log(data);