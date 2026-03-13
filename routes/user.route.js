import { Login, Register } from "../controllers/user.controller.js"


export function UserRoute(app){
    app.post('/register',Register)
    app.post('/login',Login)
}