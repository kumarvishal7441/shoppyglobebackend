import { Login, Register } from "../controllers/user.controller.js"

// creating path for api to register and login 
export function UserRoute(app) {
    app.post('/register', Register)
    app.post('/login', Login)
}