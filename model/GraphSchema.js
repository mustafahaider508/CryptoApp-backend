const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");



const GraphSchema = new mongoose.Schema({
   
    
})

const ApiData = mongoose.model("Datavalues",Schema);


module.exports = ApiData;
