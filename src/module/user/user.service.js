import { Op } from "sequelize"
import { userSchema } from "../../database/model/user.model.js"

// create new user 
export const createUser = async (data) => {
    let { name, email, password, gender, userName } = data
    try {
        let adding = await userSchema.create({ name, email, password, gender, userName }) // i can add the fields i want                and can ignore tha validation on schema
        // let adding = await userSchema.create({ name, email, password, gender, userName } ,{fields :["userName" , "password" , "email"] ,validate:false})
        // userSchema.upsert({ name, password, gender, userName, gender }) // create or update   will search on data base if found will update data 
        if (adding) {
            return { message: "user added successfully " }
        } else {
            return { message: "wrong data" }
        }
    } catch (error) {
        console.log(error);
        return error.errors[0].message
    }
}
// create using upsert ==> create or update data 
export const createUserUpsert = async (data) => {
    let { name, email, password, gender, userName } = data
    try {
        let [adding, flag] = await userSchema.upsert({ name, email, password, gender, userName }) // create or update   will search on data base if found will update data 
        // update flag == false
        // new creation flag == true
        if (flag) {
            return { message: "user created successfully " }
        } else {
            return { message: "user data updated" }
        }


    } catch (error) {
        return error.message
    }
}
// get data user 
export const getDate = async () => {
    let users = await userSchema.findAll({
        // attributes: ["password"]  == > ti return password only 
        attributes: {
            exclude: ["email", "password"]  // return all data without email and password 
        },
        where: { // to condition 
            [Op.or]: [{ firstName: "taha" }, { email: "fsdf@gmail.com" }] // or to get the data with more than one condition 
            // , [Op.and]: [{ firstName: "taha" }, { email: "fsdf@gmail.com" }] // or to get the data with more than one condition 
            //   firstName: { [Op.like]: "%m%" }  // searching on first name with Op  
            //   id: { [Op.gte]: 11 } // get  all data with id is greater than or equal 11 
            //id: 11
        },
        //    limit:4  // ====return this item number 
        //  offset: 3,  // ===how many user i will skip or || where i will start 
    })
    return users
}

// get  data and pagination 
export const getDatePagination = async (data) => {
    let { page, limit } = data
    limit = Number(limit) || 5
    page = page < 0 || !Number(page) ? 3 : Number(page)
    let offset = (Number(page) - 1) * limit
    let { count, rows } = await userSchema.findAndCountAll({
        limit,
        offset
    })
    return {
        rows,
        metaData: {
            totalCount: count,
            totalPage: Math.ceil(count / limit)
        }
    }
} 