import { Op } from "sequelize"
import { PostModel } from "../../database/model/bost.modle.js"
import { userSchema } from "../../database/model/user.model.js"





export const createPost = async (data) => {
    let { content, title, authorId } = data
    try {
        let created = await PostModel.create({ content, title, authorId })
        if (created) {
            return { message: "post created successfully " }
        }
    } catch (error) {
        return {
            message: "error",
            error
        }
    }
}

export const getAllPosts = async () => {
    let allPosts = await PostModel.findAll({
        attributes: {
            exclude: "deletedAt",
        },
        include: {
            model: userSchema,
            attributes: {
                exclude: "deletedAt"
            }
        }

    })
    if (allPosts.length > 0) {
        return allPosts
    } else {
        return {
            message: "no posts found"
        }
    }
}