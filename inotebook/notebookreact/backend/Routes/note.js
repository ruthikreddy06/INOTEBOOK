const express = require('express')
const routes = express()
const notesinfo=require('../modules/Notes');
const fetcher=require('../middlewire/fetcher');
const { body, validationResult } = require('express-validator');
const { json } = require('express');
routes.post('/',fetcher,[ body('title').isLength({ min: 3 }),body('description').isLength({min:5})],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array(),success:false});
    }
   const  user=await notesinfo.create({              //this is adding the data
        userid: req.user.id,
        title: req.body.title,
        tag :req.body.tag,
        description:req.body.description
      })
      res.send({user,success:true});
})
routes.post('/fetchdata',fetcher,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {                            //this is for fetching the data from the database
      return res.status(400).json({errors: errors.array()});
    }
    const data=await notesinfo.find({userid:req.user.id});
      res.send(data);
})
routes.put('/updatedata/:id',fetcher,[ body('title').isLength({ min: 0}),body('description').isLength({min:0}), body('tag').isLength({ min: 0})],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {                            //this is for updateing the data in  the database
      return res.status(400).json({errors: errors.array()});
    }
    let newdata={};
    if(req.body.title){
        newdata.title=req.body.title;
    }
    if(req.body.tag){
        newdata.tag=req.body.tag;
    }
    if(req.body.description){
        newdata.description=req.body.description;
    }
    let data=await notesinfo.findById(req.params.id)
    if(!data){
        return res.status(404).json({error:"id not found bro"});
    }
    data=await notesinfo.findByIdAndUpdate(req.params.id,{$set:newdata},{new:true})
    res.send({data});

    }
)
routes.delete('/deletedata/:id',fetcher,async (req,res)=>{

  try{
    let data=await notesinfo.findById(req.params.id)
    if(!data){
        return res.status(404).json({error:"id not found bro",success:false});
    }
    data=await notesinfo.findByIdAndDelete(req.params.id)
    res.send({msg:"data deleted",data,success:true});
  }catch(error){
    return json({error:"server error",success:false});
  }

    }
)
module.exports=routes