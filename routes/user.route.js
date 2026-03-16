import { Login, Register } from "../controllers/user.controller.js"


// creating path for api to register and login 
export function UserRoute(app) {

    console.log("user rouet loaded")
    // app.post('/register', Register)
//     app.get('/register', (req,res)=>{
//     res.send("register route working")
// })
    app.post('/register',Register);
    app.post('/login', Login);
}