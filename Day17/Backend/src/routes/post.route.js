const express = require("express")
const postController = require("../controllers/post.controller")
const identifyUser = require("../middlewares/auth.middleware")
const postRouter = express.Router()
const multer = require("multer")



const upload = multer({storage: multer.memoryStorage() })



/**
 *  /api/post/ create a post 
 */
postRouter.post("/",upload.single("chacha"),identifyUser,postController.createPostController)


/**
 * @route Get /api/post/
 * @description get the post from the server 
 */

postRouter.get("/",identifyUser,postController.getPostController)

/**
 * @description get the post detailed
 */


postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController);


/**
 * @route POST/api/posts/like/:postId 
 * @description like a post with the id provided in the request params.
 */

postRouter.post("/like/:postId", identifyUser,postController.likePostController)

module.exports = postRouter