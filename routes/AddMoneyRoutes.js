import express from "express";

const router = express.Router();

router.post('/', async(req,res) =>{
    try {
        const { amount } = req.body
        if(amount <=0 ) return res.status(400).json({error:"Invalid amount"})
    } catch (error) {
        console.error("Error creating transaction:", error);
    }
})

