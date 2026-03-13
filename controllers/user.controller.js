import userModal from "../modal/user.modal.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

// create user
export async function Register(req, res) {
    try {
        const { user, email, password } = req.body

        const data = await userModal.findOne({ email });
        if (data) {
            return res.status(409).json("user already exit")
        } else {
            const newuser = await userModal.create(
                {
                    user,
                    email,
                    password: bcrypt.hashSync(password, 10),
                }
            );
            console.log(newuser)
            return res.status(201).json({ "new user successfully created": newuser })
        }
    } catch (error) {
        res.status(500).json({ "err": error.message })
    }

}

// verify user
export async function Login(req, res) {
    try {
        const { email, password } = req.body

        const data = await userModal.findOne({ email });
        if (!data) {
            return res.status(409).json("user not found")
        } else {
            let validpass = bcrypt.compareSync(password, data.password)
            if (!validpass) {
                res.status(409).json("user password wrong")
            }
            var token = jwt.sign({ id: data.id }, 'SECRETKEY',{expiresIn:"30m"});
            return res.status(200).json({
                user: {
                    email: data.email,
                    user: data.user
                },
                accessToken :token,

            })

            return res.status(201).json({ "new user successfully created": newuser })
        }
    } catch (error) {
        res.status(500).json({ "err": error.message })
    }
}