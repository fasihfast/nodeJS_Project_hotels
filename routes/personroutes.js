const express=require('express')
const router=express.Router();
const Person=require('./../models/person')

router.get('/:workType',async(req,res)=>{
    const workType=req.params.workType
    try{
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const data=await Person.find({work: workType})
            console.log("Person fetched");
            res.status(200).json(data)
        }
        else{
            res.status(404).json({
                error:"workType not found"
            })}
        

    }catch(err){
        console.log(err)
        res.status(500).json({
            error:"Internal Server error"
        })
    }
})

router.post("/",async(req,res)=>{
    try{

    const data=req.body;
    const newPerson=new Person(data)
    const response= await newPerson.save()
    console.log("data is saved successfully");
    res.status(200).json(response)    
    }
    catch(err){
         console.log("error has occured")
         res.status(500).json({error:"Server error has occured"})        
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find()
        console.log("data fetched");
        res.status(201).json(data)

    }catch(err){
        console.log("Data fetched failed");
        res.status(500).json({error:"Internal Server error"})
    }
})

router.put('/:pid', async(req,res)=>{
    try{

        const personid=req.params.pid
        const updatedperson=req.body

        const data=await Person.findByIdAndUpdate(personid,updatedperson,{
            new: true,
            runValidators: true
        })

        if(!data){
            res.status(404).json({error:"Person not found"})
        }
        console.log("data updated");
        res.status(200).json(data)
    }catch(err){
        console.log("Data fetched failed");
        res.status(500).json({error:"Internal Server error"})

    }
})
router.delete('/:pid', async(req,res)=>{
    try{
        const personid= req.params.pid
        const response=await Person.findByIdAndDelete(personid)

        if(!response){ 
          return  res.status(404).json({error:"Person not found"})
        }

        console.log("Person data deleted");
        res.status(200).json({meesage:"Person Data deleted Successfully"})

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server error"})
    }
})
module.exports=router;