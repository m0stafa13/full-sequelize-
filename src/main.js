import express from "express"
import { checkConnection } from "./database/connection.js"
import userRouter from "./module/user/user.controller.js"
const app = express()
app.use(express.json())
const port = 3000
// database connection check function 
checkConnection()

app.use("/auth", userRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))