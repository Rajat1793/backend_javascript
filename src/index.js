import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})
connectDB()

// ANOTHER WAY TO CONNECT TO DB
// const app = express()
// // ifwe ... (()=>())()
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.error("Error: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () =>{
//             console.log(`Listening on Port: ${process.env.PORT}`);
//         })
//     }
//     catch (error){
//         console.error("Error: ",error);
//         throw error
//     }
// })() 