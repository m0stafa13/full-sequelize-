import { Sequelize } from "sequelize";


export const sequelize = new Sequelize("fullSequelize", "root", "", {
    host: "localhost",
    // the driver 
    dialect: "mysql",
    // make terminal stop write the query 
    // logging :false
    logging: true,


})
// check database connection 
export const checkConnection = async () => {
    try {
        await sequelize.authenticate() // return SELECT 1+1 AS result to check database connection 
        // await sequelize.sync()
        sequelize.sync({
            // alter: true,   // to change update on table 
            // force: true    // to delete any data on table
        })
        console.log("database connected successfully....");
    } catch (error) {
        console.log(error);
    }
}
