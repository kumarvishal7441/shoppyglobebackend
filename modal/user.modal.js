// mongoose connected to data
import mongoose from 'mongoose';
// creating schema for register and login
const Userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }

});
// exporting the modal of user
const userModal = mongoose.model("user", Userschema);
export default userModal