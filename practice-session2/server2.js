 import express from "express";
 import dotenv from "dotenv"
 import connectdb from "../practice-session2/connection/db.js"

 dotenv.config();
  const app = express();
  app.use(express.json());

connectdb()


app.get('/',(req,res)=>{
    res.send("soaoskjas")
    console.log("asas")
})


app.listen(9000,()=>{
  console.log(`Server2 is running on port  http://localhost:${process.env.PORT}`);
});