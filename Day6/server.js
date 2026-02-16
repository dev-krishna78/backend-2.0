//   -server ko start krna
//   -database se connect krna 

const app = require("./src/app");

const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect("mongodb+srv://krishnacarpenter222_db_user:zGZf8RHi6JIMDOsV@cluster0.t9yluda.mongodb.net/day6")
    .then(()=>{
        console.log("Connected to database")
    })
} 


connectToDb()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})