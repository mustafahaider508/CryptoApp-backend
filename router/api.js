const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const ApiData = require("../model/Schema");

router.post("/api", (req,res,next) => {
    const apidata = new  ApiData();
    const apidata1 = new  ApiData();
    const apidata2 = new  ApiData();

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
      var data = res.data.filter(x => (x.symbol === "eth") ||(x.symbol === "bnb") || (x.symbol === "matic")).map(i => {return {name:i.name,price:i.current_price,date:i.last_updated}}); 
        apidata.tokenname=data[0].name;
        apidata.price=data[0].price;
        apidata.date=data[0].date;

        apidata1.tokenname=data[1].name;
        apidata1.price=data[1].price;
        apidata1.date=data[1].date;


        apidata2.tokenname=data[2].name;
        apidata2.price=data[2].price;
        apidata2.date=data[2].date;
                
    
        console.log(apidata);
        console.log(apidata1);


       apidata.save().then((res)=>{console.log(res)})
       apidata1.save().then((res)=>{console.log(res)})
       apidata2.save().then((res)=>{console.log(res)})

    }).catch((err) => {
        console.log(err);
    })

    res.send(apidata);
   
    
   
})

router.get("/getapi", async(req,res)=>{
    var Api = await ApiData.find()
    res.send(Api)
  })
module.exports = router;