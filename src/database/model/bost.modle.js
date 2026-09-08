import { DataTypes, Model } from "sequelize";

import { sequelize } from "../connection.js";
import { userSchema } from "./user.model.js";
// class 
export class PostModel extends Model {

    async checkAuthorId(authorId) {

        let user = await userSchema.findByPk(authorId)
        if (!user) {
            throw new Error("author id is not found")
        }
    }
}

PostModel.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 5]
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 3000]
        }
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    paranoid: true,
    timestamps: true
})

PostModel.sync({})
