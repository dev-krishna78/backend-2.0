const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"User name is already exists"],
        required:[true,"User name is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
        required:[true,"Email is required"]
     },
     password:{
        type: String,
        required: [true,"Password is required"]
     },
     bio:String,
     profileImage:{
        type: String,
        default: "https://ik.imagekit.io/Krishna7898/non_existing_id.png?updatedAt=1772274086746"
     }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel