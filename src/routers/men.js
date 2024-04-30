const express=require("express");
const router=new express.Router();

const MenRanking=require("../models/mens");

//we will handel Post request
router.post("/mens",async(req,res)=>{
    try{
     const addingRecords=new MenRanking(req.body)
     const insertMens=await addingRecords.save();
     res.status(201).send(insertMens);
    }catch(e){
   res.status(400).send(e)
    }
})

//we will handel Get request
router.get("/mens",async(req,res)=>{
    try{
     const getMens=await MenRanking.find({}).sort({"ranking":1});
    res.send(getMens);
    }catch(e){
   res.status(400).send(e)
    }
})

//we will handel Get request in induvisual man by id
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
     const getMen=await MenRanking.findById({_id});
     res.send(getMen);
    }catch(e){
   res.status(400).send(e)
    }
})


//we will handel Patch request in induvisual man by id
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedMen = await MenRanking.findByIdAndUpdate(_id,req.body,{ 
            new: true, runValidators: true 
        });
        if (!updatedMen) {
            return res.status(404).send({ error: "Record not found" });
        }
        res.send(updatedMen);
    } catch (e) {
        res.status(500).send({ error: "Internal server error" });
    }
});

//we will handel DElete request in induvisual man by id
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedMen = await MenRanking.findByIdAndDelete(_id);
        if (!deletedMen) {
            return res.status(404).send({ error: "Record not found" });
        }
        res.send(deletedMen);
    } catch (e) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports=router;
