const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/signup")

//check db connection
connect.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("not-connected")
});

//schema
const SignupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", SignupSchema);

module.exports = collection;