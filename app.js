const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db');

// const ApiData = require('./model/Schema'); 

const PORT = process.env.PORT;

app.use(express.json());

const middleware = (req,res,next) => {
    console.log(`Hello from the middleware`);
    next();
}

app.use(require("./router/auth"));

app.get("/api", middleware ,(req,res) => {
    res.send("Hello from Backend Api");
});

app.listen(PORT,() => {
    console.log("server is on");
})