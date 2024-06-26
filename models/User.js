const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    }, 
    email:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    }, 
    password:{
        type:String,
        require:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    follwers:{
        type:Array,
        default:[],
    },
    followins:{
        type:Array,
        default:[],
    },
    isAdmins:{
        type:Boolean,
        default:false,
    },
},
{Timestamp:true}
);

module.exports = mongoose.model("User", UserSchema);