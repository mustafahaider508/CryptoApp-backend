const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    tokenname:{
        type:String,
        require:true,
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

const ApiData = mongoose.model("Datavalues",Schema);


module.exports = ApiData;
