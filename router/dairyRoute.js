const express = require("express");
const router = express.Router();

// models
const placeschema = require("../models/dairy/placemodel");
const peopleschema = require("../models/dairy/peoplemodel");
const dishschema = require("../models/dairy/dishmodel");
const storyschema = require("../models/dairy/storymodel");
const dailyschema = require("../models/dairy/dairymodel");
const Imgs = require("../models/dairy/imgSchema");

//  posting places
router.post("/postfplaces", async (req, res) => {
    const { email, pname, why } = req.body;
    let x=0;
    for(let i=0;i<email.length;i++){
        x+=email[i].charCodeAt()
    }
    function usingkey(s){
        let final="";
        for(let i=0;i<s.length;i++){
            final+=(s[i].charCodeAt()*x/17).toString()
            final+="#";
        }
        return final
    }
    let encryptedpname=usingkey(pname)
    let encryptedwhy=usingkey(why)
  
    try {
      const newData = new placeschema({
        email: email,
        pname: encryptedpname,
        why: encryptedwhy,
      });
      await newData.save();
      return res.json(await placeschema.find());
    } catch (err) {
      console.log(err);
    }
  });

// get the favouarte places
router.get("/getfplaces/:email", async (req, res) => {
    try {
      let email = req.params.email;
      const data =await placeschema.find({email:email});
      res.send({status:"success",data:data})
    } catch (err) {
      console.log(err);
    }
});


// posting people
router.post("/postfpeople", async (req, res) => {
    const { email, pename, why } = req.body;
    let x=0;
    for(let i=0;i<email.length;i++){
        x+=email[i].charCodeAt()
    }
    function usingkey(s){
        let final="";
        for(let i=0;i<s.length;i++){
            final+=(s[i].charCodeAt()*x/17).toString()
            final+="#";
        }
        return final
    }
    let encryptedpename=usingkey(pename)
    let encryptedwhy=usingkey(why)
  
    try {
      const newData = new peopleschema({
        email: email,
        pename: encryptedpename,
        why: encryptedwhy,
      });
      await newData.save();
      return res.json(await peopleschema.find());
    } catch (err) {
      console.log(err);
    }
  });

//geting favorite people data
router.get("/getfpeople/:email", async (req, res) => {
    try {
      let email = req.params.email;
      const data =await peopleschema.find({email:email});
      res.send({status:"success",data:data})
    } catch (err) {
      console.log(err);
    }
});

//posting favorite dish
router.post("/postfdish", async (req, res) => {
    const { email, dname, why } = req.body;
    let x=0;
    for(let i=0;i<email.length;i++){
        x+=email[i].charCodeAt()
    }
    function usingkey(s){
        let final="";
        for(let i=0;i<s.length;i++){
            final+=(s[i].charCodeAt()*x/17).toString()
            final+="#";
        }
        return final
    }
    let encrypteddname=usingkey(dname)
    let encryptedwhy=usingkey(why)
  
    try {
      const newData = new dishschema({
        email: email,
        dname: encrypteddname,
        why: encryptedwhy,
      });
      await newData.save();
      return res.json(await dishschema.find());
    } catch (err) {
      console.log(err);
    }
  });

//geting favorite dish
router.get("/getfdish/:email", async (req, res) => {
    try {
      let email = req.params.email;
      const data =await dishschema.find({email:email});
      res.send({status:"success",data:data})
    } catch (err) {
      console.log(err);
    }
});


// posting story
router.post("/postfstory", async (req, res) => {
    const { email, sname, why } = req.body;
    let x=0;
    for(let i=0;i<email.length;i++){
        x+=email[i].charCodeAt()
    }
    function usingkey(s){
        let final="";
        for(let i=0;i<s.length;i++){
            final+=(s[i].charCodeAt()*x/17).toString()
            final+="#";
        }
        return final
    }
    let encryptedsname=usingkey(sname)
    let encryptedwhy=usingkey(why)
  
    try {
      const newData = new storyschema({
        email: email,
        sname: encryptedsname,
        why: encryptedwhy,
      });
      await newData.save();
      return res.json(await storyschema.find());
    } catch (err) {
      console.log(err);
    }
  });

// get the favouarte story
router.get("/getfstory/:email", async (req, res) => {
    try {
      let email = req.params.email;
      const data =await storyschema.find({email:email});
      res.send({status:"success",data:data})
    } catch (err) {
      console.log(err);
    }
});

// posting places
router.post("/postfplaces", async (req, res) => {
  const { email, pname, why } = req.body;
  let x=0;
  for(let i=0;i<email.length;i++){
      x+=email[i].charCodeAt()
  }
  function usingkey(s){
      let final="";
      for(let i=0;i<s.length;i++){
          final+=(s[i].charCodeAt()*x/17).toString()
          final+="#";
      }
      return final
  }
  let encryptedpname=usingkey(pname)
  let encryptedwhy=usingkey(why)

  try {
    const newData = new placeschema({
      email: email,
      pname: encryptedpname,
      why: encryptedwhy,
    });
    await newData.save();
    return res.json(await placeschema.find());
  } catch (err) {
    console.log(err);
  }
});

// posting dairy
router.post("/postfdailydairy", async (req, res) => {
    const { email, daname, why,rad } = req.body;
    let x=0;
    for(let i=0;i<email.length;i++){
        x+=email[i].charCodeAt()
    }
    function usingkey(s){
        let final="";
        for(let i=0;i<s.length;i++){
            final+=(s[i].charCodeAt()*x/17).toString()
            final+="#";
        }
        return final
    }
    let encrypteddaname=usingkey(daname)
    let encryptedwhy=usingkey(why)
  
    try {
      const newData = new dailyschema({
        email: email,
        rad:rad,
        daname: encrypteddaname,
        why: encryptedwhy,
      });
      await newData.save();
      return res.json(await dailyschema.find());
    } catch (err) {
      console.log(err);
    }
  });

// get the favouarte dailydairy
router.get("/getfdailydairy/:email", async (req, res) => {
  try {
    let email = req.params.email;
    const data =await dailyschema.find({email:email});
    res.send({status:"success",data:data})
  } catch (err) {
    console.log(err);
  }
});

// posting image
router.post('/picuploads', async (req, res) => {
  const { email, videoUrl, imgUrl } = req.body;
  try {
      const data = new Imgs({ email, videoUrl, imgUrl });
      await data.save();
      res.status(201).json({ status: 201, message: "Media uploaded successfully" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

// view images
router.get("/viewimgs/:email", async (req, res) => {
  try {
      const email = req.params.email;
      const data = await Imgs.find({ email });
      console.log(data)
      res.json(data)
      // res.send({ status: "success", data: data });
  } catch (err) {
      console.log(err);
      res.status(400).send(err);
  }
});

module.exports = router;