const express = require("express");
const router = express.Router();

require("../db");
const ApiData = require("../model/Schema");

router.get("/",(req,res) => {
    res.send("Hello from Server 2");
});

router.post("/coins", async(req,res)=>{
    console.log(req.body)
   const data = new  ApiData();
   data.tokenname=req.body.name;
   data.price=req.body.price;
   data.date=req.body.date;
   console.log(data)
   data.save().then((res)=>{console.log(res)})
     res.send(data);

  })

  router.get("/getcoins", async(req,res)=>{
    var coin = await ApiData.find()
    res.send(coin)
  })

module.exports = router;