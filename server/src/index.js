import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express()

const port = 8000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
})

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(port, ()=>{
    console.log("Blog server is listening at port", port)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error occ'
    res.status(statusCode).json({
        success: false,
        statusCode, 
        message
    })
})
