import { userSchema } from "../../database/model/user.model.js"


export const createUser = async (data) => {
    let { name, email, password, gender } = data
    try {
        let adding = await userSchema.create({ name, email, password, gender })
        if (adding) {
            return { message: "user added successfully " }
        } else {
            return { message: "wrong data" }
        }
    } catch (error) {
        return error.message
    }
}   