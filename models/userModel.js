const {Schema, models, model} = require("mongoose");

const userSchema = new Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true},
    password:{type:String, required:true, trim:true},
    isAdmin:{type:Boolean, default:false, required:true}
})

const userModel = model("user_tbs", userSchema);

module.exports = userModel;