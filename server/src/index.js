import express from 'express'
import mongoose from 'mongoose'

const app = express()

const port = 8000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
})

app.get('/', (req,res)=>{
    res.send("Everythng is working perfectly fine")
})
app.listen(port, ()=>{
    console.log("Blog server is listening at port", port)
})