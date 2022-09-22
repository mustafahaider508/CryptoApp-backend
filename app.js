const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const { default: axios } = require('axios');
const app = express();


dotenv.config({path:'./config.env'});
require('./db');

// const ApiData = require('./model/Schema'); 

const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

const middleware = (req,res,next) => {
    console.log(`Hello from the middleware`);
    next();
}

app.use(require("./router/auth"));
app.use(require("./router/api"));
app.use(require("./router/graphapi"));



app.listen(PORT,() => {
    console.log("server is on");
})