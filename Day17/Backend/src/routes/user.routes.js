const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const userController = require("../controllers/user.controller.js")

const userRouter = express.Router()

/**
 * @route POST /api/users/follow/:userid 
 * @description Follow a user
 * @access Private 
 */


userRouter.post("/follow/:username", identifyUser,userController.followUserController)

/**
 * @route Post /api/user/unfollow/:userid
 * @description Unfollow a user
 * @access Private 
 */

userRouter.post("/unfollow/:username", identifyUser,userController.unfollowUserController)


// accept request
userRouter.patch("/accept/:id", identifyUser,userController.acceptFollow);

// reject request
userRouter.patch("/reject/:id",identifyUser, userController.rejectFollow);



module.exports = userRouter;