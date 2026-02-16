//   -server ko start krna
//   -database se connect krna 

const app = require("./src/app");

const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log("Connected to database")
    })
} 


connectToDb()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})