const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")


const multer =  require("multer")

const upload = multer({ storage: multer.memoryStorage() })
  
postRouter.post("/", upload.single("chacha"),postController.createPostController)


/**
 * @route GET /api/post/
 * @description get the post from the server 
 */

postRouter.get("/",postController.getPostController)

/**
 * @description get the post detailed 
 */

postRouter.get("/details/:postId", postController.getPostDetailsController);



module.exports = postRouter