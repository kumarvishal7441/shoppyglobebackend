// mongoose connected to data
import mongoose from 'mongoose';
// creating schema for register and login
const Userschema = new mongoose.Schema({
    user: String,
    email: String,
    password: String,

});
// exporting the modal of user
const userModal = mongoose.model("user", Userschema);
export default userModal