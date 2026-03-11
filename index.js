import express from "express"
const app = express()

app.get('/h',(req, res)=>{
    res.send("hi i am get method of h")
})
let port= 3000;
app.listen(port,()=>{
 console.log(`app is connected to ${port}`)
})