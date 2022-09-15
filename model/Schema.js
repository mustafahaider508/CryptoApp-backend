const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    tokenname:{
        type:String,
        require:[true,"Please fill the gender field"],
        trim:true,
    },
    price:{
        type:Number,
        require:true
    },
    date:{
        type:String,
        require:true,
    }
    
})

const ApiData = mongoose.model("Values",Schema);
module.exports = ApiData;