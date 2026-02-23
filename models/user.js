import mongoose from "mongoose";
const userSchema=mongoose.Schema({
id:Number,
name:String,
email:String,


})

const User=mongoose.model(("practiceUser"),userSchema);
export default User;