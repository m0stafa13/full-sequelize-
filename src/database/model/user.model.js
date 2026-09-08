import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const userSchema = sequelize.define("User", {
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         len: [3, 30], // check length of name ,
    //         isAlpha: true,
    //         validName(value) {
    //             if (value == "mostafa") {
    //                 throw new Error("mostafa is not allowed")
    //             }
    //         }
    //     }
    // },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.VIRTUAL,
        set(value) {
            let [fName, lName] = value.split(" ")
            this.setDataValue("firstName", fName)
            this.setDataValue("lastName", lName)
            // this.setDataValue()
        },
        get() {
            return ` ${this.getDataValue("firstName")} ${this.getDataValue("lastName")}  `
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: "male"
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    paranoid: true,
    //timestamps :false ,  //==> to not create updated at and created 
    //tableName :"user_table" , //==> if you want to change tha table name  
    validate: {
        // we can use option to do validation here on all data came
    }
})

//! alter  :true ==> to change in user schema you created before
userSchema.sync({   }) // sync work in connection file  