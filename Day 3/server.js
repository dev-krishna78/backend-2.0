const express = require("express")

const app = express()

app.use(express.json())

const notes = [];

app.post("/notes",(req , res)=>{

    console.log(req.body);
    notes.push(req.body);
    res.send("note created")
})

app.get("/notes",(req,res)=>{
    console.log("hello world")
    res.send("hello world ")
})

app.listen( 3000 , ()=>{
    console.log("server is running on port 3000")
})