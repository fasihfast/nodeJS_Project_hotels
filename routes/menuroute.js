const express=require('express')
const router=express.Router()
const Menu=require('./../models/Menu')
router.get('/:taste',async(req,res)=>{
    
    try{
        const Taste=req.params.taste
        if(Taste=='sweet' || Taste=='salty' || Taste=='sour'){
    
            const response=await Menu.find({taste:Taste})
            console.log("data fetched");
            res.status(200).json(response)

        }else{
            res.status(404).json({message:"Taste not found"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server error"})
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const menuid=req.params.id
        const updatemenu=req.body
        const response=await Menu.findByIdAndUpdate(menuid,updatemenu,{
            new:true,
            runValidators: true
        })
        if(!response){
            res.status(404).json({message:"Id not found"})
        }
        console.log("Menu updated successfully");
        res.status(200).json(response)
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server error"})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const menuid=req.params.id
        const data=await Menu.findByIdAndDelete(menuid)
        if(!data){
            res.status(404).json({message:"Id not found"})
        }
        console.log("Menu data with id "+menuid +" deleted successfully");
        res.status(200).json({
            message:"Menu data deleted Successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server error"})
    }
})
module.exports=router;


