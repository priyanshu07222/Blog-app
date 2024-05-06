import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoutes from './routes/user.routes.js'

dotenv.config();

const app = express()

const port = 8000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
})

app.use('/api/user', userRoutes)

app.listen(port, ()=>{
    console.log("Blog server is listening at port", port)
})
