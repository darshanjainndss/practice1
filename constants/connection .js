import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

var connectDB=()=>{
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("connected")})}


export default connectDB;