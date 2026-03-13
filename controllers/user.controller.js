import userModal from "../modal/user.modal.js"
import bcrypt from "bcrypt"

// create user
export async function Register(req,res){
    try{
        const{user,email,password}=req.body

    const data = await userModal.findOne({email});
    if(data){
       return res.status(409).json("user already exit")
    } else {
        const newuser =  await userModal.create(
            {
                user,
                email,
                password:bcrypt.hashSync(password, 10),
            }
        );
        console.log(newuser)
        return res.status(201).json({"new user successfully created":newuser})
    }
    } catch (error){
        res.status(500).json({"err":error.message})
    }
    
}

// verify user
export async function Login(req,res){
        try{
        const{email,password}=req.body

    const data = await userModal.findOne({email});
    if(!data){
       return res.status(409).json("user not found")
    } else {
        const newuser =  await userModal.create(
            {
                user,
                email,
                password:bcrypt.hashSync(password, 10),
            }
        );
        console.log(newuser)
        return res.status(201).json({"new user successfully created":newuser})
    }
    } catch (error){
        res.status(500).json({"err":error.message})
    }
}