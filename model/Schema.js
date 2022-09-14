const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    tokenname:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }

})

const ApiData = mongoose.model("Values",Schema);
module.exports = ApiData;