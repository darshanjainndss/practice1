import mongoose from "mongoose";

const patientschema=mongoose.Schema({
pid:Number,
name:String,
age:Number

})

const patient =mongoose.model("patient",patientschema)

export default patient