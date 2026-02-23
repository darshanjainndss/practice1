import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB=()=>{mongoose.connect( process.env.MONGO_URL

).then(()=>{
  console.log("Connected to MongoDB successfully");
});}
export default connectDB;