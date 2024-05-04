import express from 'express'

const app = express()

const port = 8000;
console.log("working in src")

app.get('/', (req,res)=>{
    res.send("Everythng is working perfectly fine")
})
app.listen(port, ()=>{
    console.log("Blog server is listening at port", port)
})