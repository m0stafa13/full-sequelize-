import { Router } from "express";
import { createUser } from "./user.service.js";

const router = Router()

// add new user 
router.post("/add-new-user", async (req, res) => {
    const data = await createUser(req.body)
    res.json({ data })
})







export default router