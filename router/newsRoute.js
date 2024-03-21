const express =require("express");
const router=express.Router();
const News = require("../models/news/newsSchema");


router.post('/newsupload',async(req,res)=>{
    const {title,heading,district,location,body,conclusion}=req.body;
    if(!title || !heading || !district || !location || !body || !conclusion){
        return res.status(422).json({
            error:"Fill all the data"
        })
    }
    try{
        const data = new News({ title, heading, district, location,body, conclusion});
        await data.save();
        res.status(201).json({ status: 201, message: "news uploaded successfully" });
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/headlines", async (req, res) => {
    try {
      return res.json(await News.find());
    } catch (err) {
      res.status(400).send(err);
      console.log(err);
    }
});

router.get("/readnews/:id", async (req, res) => {
    try {
      let oid = req.params.id;
      let data = await News.find({ _id: oid });
      return res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports=router