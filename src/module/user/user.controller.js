import { Router } from "express";
import { createUser, createUserUpsert, getDate, getDatePagination } from "./user.service.js";

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
// get user data and getDatePagination
router.get("/get-all-users-page", async (req, res) => {

    const data = await getDatePagination(req.query)
    res.json(data)
})







export default router