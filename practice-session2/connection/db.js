import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

function connectdb(){

mongoose.connect(process.env.MONGO_URL2).then(()=>{
console.log("mongo db for msevre2")
})

}
export default connectdb