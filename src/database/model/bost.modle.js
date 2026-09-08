import { DataTypes, Model } from "sequelize";

import { sequelize } from "../connection.js";
import { userSchema } from "./user.model.js";
// class 
export class PostModel extends Model {
    // check author id without relation 
    // async checkAuthorId(authorId) {
    //     let user = await userSchema.findByPk(authorId)
    //     if (!user) {
    //         throw new Error("author id is not found")
    //     }
    // }
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


// relation 
PostModel.belongsTo(userSchema, {
    foreignKey: {
        name: "authorId",
        allowNull: false
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
})
// PostModel.sync({ force: true, alter: true })
