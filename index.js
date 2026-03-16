import express from "express"
const app = express()
import mongoose from "mongoose";
import { productRoute } from "./routes/product.route.js";
import { UserRoute } from "./routes/user.route.js";

app.get('/vis', (req, res) => {
    res.send("api is running without any error")
})
app.use(express.json())  // adding middleware for express

// passing the app
UserRoute(app);
productRoute(app);

// app.post('/test',(req,res)=>{res.send(console.log("test roting is working"))})
// creted port where http://localhost:3000 api is rendering
// unable to connect cloud database
// mongoose.connect('mongodb+srv://kumarvishalsingh9162_db_user:cVV2pVGDLbZ8bsLo@cluster0.ebwjqcu.mongodb.net/')
// local data base
mongoose.connect('mongodb://localhost:27017/productuser')
    .then(() => { console.log("db connected") })
    .catch((err) => { console.log("db not connected") })

let port = 3000;
app.listen(port, () => {
    console.log(`app is connected to ${port}`)
})

// another atlas user
// kumarvishalsingh9162_db_user
// cVV2pVGDLbZ8bsLo
// mongodb+srv://kumarvishalsingh9162_db_user:cVV2pVGDLbZ8bsLo@cluster0.ebwjqcu.mongodb.net/
// mongodb+srv://kumarvishalsingh9162_db_user:jCui2k7s3yb3c3MA@cluster0.ebwjqcu.mongodb.net/
