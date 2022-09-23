const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();


router.get("/about" ,async (req,res) => {
    const data = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
   console.log(data.data.args);
    
    
    })

module.exports = router;