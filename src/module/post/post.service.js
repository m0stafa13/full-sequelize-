import { Op } from "sequelize"
import { PostModel } from "../../database/model/bost.modle.js"





export const createPost = async (data) => {
    let { content, title, authorId } = data
    try {
        let created = await PostModel.create({ content, title, authorId })
        await created.checkAuthorId(authorId)
        if (created) {
            return { message: "post created successfully " }
        }
    } catch (error) {
        console.log(error);

        return { message: "author id is not found" }
    }
}
