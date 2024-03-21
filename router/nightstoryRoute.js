const express =require("express");
const router=express.Router();
const storyFileSchema = require("../models/storymodels/upload_file_story")


// uploading story to the database
router.post('/uploadstoryfile',async(req,res)=>{
    const {title,genere,coverPicUrl,storyfileUrl,author} = req.body;
    try{
        const data = new storyFileSchema({
            title,genere,coverPicUrl,storyfileUrl,author
        })
        await data.save();
        res.status(201).json({status:201,message:"file uploaded"})
    }catch(err){
        res.status(400).json({status:400,message:"file not uploaded"})
    }
})
  
router.get("/storyfilesall",async(req,res)=>{
    try{
        const data = await storyFileSchema.find();
        res.json(data);
    }catch(err){
        res.status(400).send(err);
    }
})
  
router.get("/readstoryfile/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const data = await storyFileSchema.findById(id);
        res.json(data);
    }catch(err){
        res.status(400).send(err);
    }
})
  

module.exports=router