import { Router } from "express";
import { createUser, createUserUpsert, getDate } from "./user.service.js";

const router = Router()

// add new user or update
router.post("/add-new-user", async (req, res) => {
    const data = await createUserUpsert(req.body)
    res.json({ data })
})
// add new user without update data 
router.post("/add-new-user-only", async (req, res) => {
    const data = await createUser(req.body)
    res.json({ data })
})
// get user data 
router.get("/get-all-users", async (req, res) => {
    const data = await getDate()
    res.json(data)
})







export default router