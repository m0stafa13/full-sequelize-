import { Router } from "express";
import { createPost, getAllPosts } from "./post.service.js";
const router = Router()


router.post("/create-post", async (req, res) => {
    let data = await createPost(req.body)
    res.json(data)
})

router.get("/", async (req, res) => {
    let data = await getAllPosts()
    res.json(data)
})




















export default router