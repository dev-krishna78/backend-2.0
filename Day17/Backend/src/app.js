const cookieParser = require("cookie-parser");
const express = require("express");
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");
const userRouter = require("./routes/user.routes")
const cors = require("cors")




const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/users",userRouter)




module.exports = app