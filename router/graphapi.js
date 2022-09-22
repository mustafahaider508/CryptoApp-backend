const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();


router.get("/about" , (req,res) => {
    const data = axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365`).then((res) => {
         console.log(res.data.prices);
       }).catch((err) => {
        console.log(err);
    });  
    
       res.send(data);
    })

module.exports = router;