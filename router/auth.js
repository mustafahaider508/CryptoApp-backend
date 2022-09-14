const express = require("express");
const router = express.Router();

require("../db");
const ApiData = require("../model/Schema");

router.get("/",(req,res) => {
    res.send("Hello from Server 2");
});

router.post("/data" , (req,res) => {
const {tokenname,price,date} = req.body;

if(!tokenname || !price || !date){
    return res.status(422).json({error:"Invalid attemp"})
}

ApiData.findOne({tokenname:tokenname}).then((avl) => {
    if(avl){
        return res.status(422).json({error: "Already exits"});
    }

    const data = new ApiData({tokenname,price,date});
   
   data.save().then(() => {
       res.status(201).json({message:"Data added successfully"});

   }).catch((err) => res.status(500).json({error:"Failed"}));
}).then(err => {console.log(err);})
    // console.log(req.body);
    // res.json({message:req.body});
})
module.exports = router;