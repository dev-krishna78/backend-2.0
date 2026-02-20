const express = require('express')
const app = express()
const noteModel = require("./models/notes.model")
const cors = require("cors")
const path = require("path")

app.use(express.json())
app.use(cors())


app.use(express.static("./public"))
// post api for create note 

app.post('/api/notes',async (req,res) => {
    const{title , description} = req.body;

    const note  = await noteModel.create({
        title,description
    })
     res.status(201).json({
        message:"note created succesfully",
        note
     })
})
     // get api for fetched notes 

     app.get("/api/notes", async(req,res)=>{
        const notes = await noteModel.find()

        res.status(200).json({
            message:"notes fetched",
            notes
        })
     })

     // delete api for delete note

    app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully."
    })
})


     // patch for partial change in notes 

     app.patch("/api/notes/:id", async (req,res)=>{
        const id = req.params.id
        const {description} = req.body 

        await noteModel.findByIdAndUpdate(id,{description})

         res.status(200).json({
            message:"Description is updated successfully"
         })
     })
  

     app.use('*name',(req, res)=>{
        res.sendFile(path.join(__dirname,"..","/public/index.html"))
     })




module.exports = app