import { Router } from "express";
import { createUser, createUserUpsert, deleteUser, getDate, getDatePagination, hurdDeleteUser, restoreUser } from "./user.service.js";

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
//  soft delete user 
router.delete("/delete-user/:id", async (req, res) => {
    let { id } = req.params
    const data = await deleteUser(id)
    res.json(data)
})
// restore user 
router.put("/restore-user/:id", async (req, res) => {
    let { id } = req.params
    const data = await restoreUser(id)
    res.json(data)
})
// hurd delete
router.delete("/hard-delete-user/:id", async (req, res) => {
    let { id } = req.params
    const data = await hurdDeleteUser(id)
    res.json(data)
})






export default router