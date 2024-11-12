const Candidate = require("../models/CandidateModel")


const PostCandidate = async(req,res)=>{
    try {
        const {name,phone,email,gender,experience,skills}=req.body 



        if (!name){
            return res.send({error:"Name is required"})
        }
        if (!email){
            return res.send({error:"Email is required"})
        }
        if (!experience){
            return res.send({error:"Experience is required"})
        }
        if (!phone){
            return res.send({error:"Phone is required"})
        }
        if (!skills){
            return res.send({error:"Skills is required"})
        }
        if(!gender){
            return res.send({error:"Gender is required"})
        }

        const candiateInstance = await Candidate({
            name,
            phone,
            email,
            gender,
            experience,
            skills
        })

        await candiateInstance.save()
        res.status(201).send({
            success:true,
            message:'Candidate Added',
            candidate:candiateInstance
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Adding Candidate",
            error
        })
        
    }
}

const GetCandidate = async(req,res)=>{
    try {
        const candidates = await Candidate.find()
        res.status(200).send({
            success:true,
            message:"Retrieved",
            candidates
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in Retrieving",
            error
        })
    }
}

module.exports = {PostCandidate,GetCandidate}