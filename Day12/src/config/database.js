const mongoose = require("mongoose")

function connectToDb (){
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(()=>{
        console.log("connect to the database")
    })
}


module.exports = connectToDb