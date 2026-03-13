// mongoose connected to data
import mongoose from 'mongoose';

const Userschema = new  mongoose.Schema({
    user:String,
    email:String,
    password:String,
    
});

const userModal = mongoose.model("user",Userschema);
export default userModal