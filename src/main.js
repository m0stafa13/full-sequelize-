import express from "express"
import { checkConnection } from "./database/connection.js"
import userRouter from "./module/user/user.controller.js"
import postRouter from "./module/post/post.controller.js"
import { relation } from "./database/model/relation.js"

const app = express()
app.use(express.json())
const port = 3000
// database connection check function 
checkConnection()
relation()

app.use("/auth", userRouter)
app.use("/posts", postRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))