import { PostModel } from "./bost.modle.js";
import { userSchema } from "./user.model.js";

export const relation = () => {
    PostModel.belongsTo(userSchema, {
        foreignKey: {
            name: "authorId",
            allowNull: false
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })

    userSchema.hasMany(PostModel, {
        foreignKey: {
            name: "authorId",
            allowNull: false
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })

}