const mongoose = require("mongoose");
const Schema = mongoose.Schema
//schema
const mySchema = new Schema({
    userName:String
    //types:String - Boolean - Number
})
const users= new Schema({
    name:String,
    age:Number,
    student:Boolean
    //types:String - Boolean - Number
})
const loanForm= new Schema({
    name:String,
    email: String,
    phone:Number,
    age:Number,
    isemployee:Boolean,
    salary:String,
    //types:String - Boolean - Number
})
//model
 const mydata = mongoose.model('mtdataa',mySchema);
 const myUsers = mongoose.model('user',users);
 const myloanForm = mongoose.model('loanForm',loanForm);
//export
module.exports =myloanForm;