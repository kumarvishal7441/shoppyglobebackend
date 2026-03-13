import { Createuser, Verifyuser } from "../controllers/user.controller.js"


export function UserRoute(app){
    app.post('/register',Createuser)
    app.post('/login',Verifyuser)
}