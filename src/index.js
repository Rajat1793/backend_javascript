import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

import { app } from './app.js'
dotenv.config({
    path: "./env"
})
connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.error("Error: ", error);
        throw error
    })
    app.listen(process.env.PORT || 4000, () =>{
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
}
)
.catch((error) =>{
    console.log("MongoDB connection failed!!", error);
})

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