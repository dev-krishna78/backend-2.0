const userModel = require('../modules/user.module')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function registerController(req,res){
  const {email, username , password, bio, profileImage } = req.body
  
  
  const isUserAlreadyExists = await userModel.findOne({
    $or : [
        {email},
        {username}
    ]
  })

  if(isUserAlreadyExists){
    return res.status(409).json({
        message:"user already exists" + (isUserAlreadyExists.email == email ? "email already exists" : "username is already exists ")
    })
  }

   const hash = await bcrypt.hash(password,10)


   const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash
   })
  
  const token = jwt.sign(
    {
        id: user._id
  },
  process.env.JWT_SECRET,
  {expiresIn: "1d"}
)

res.cookie("token",token)

res.status(201).json({
        message: "User Registered successfully",
        user:{
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })




}


async function loginController(req,res){

    const {email,username ,password} = req.body


    const user = await userModel.findOne({
        $or: [
            {username: username},
            {email: email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)


    if(!isPasswordValid){
        return res.status(401).json({
         message :"password invalid"
        })
    }

    const token = jwt.sign(
        {
         id: user._id
    },process.env.JWT_SECRET,
    {expiresIn: "1d"}
)


   res.cookie("token", token)

   res.status(201).json({
    message: "user loggedIn successfully",
    user:{
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage
    }
   })
}

module.exports = {
    registerController,loginController
}