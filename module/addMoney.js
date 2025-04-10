import mongoose from "mongoose";

const addMoneySchema = new mongoose.Schema({
    id:String,
    image:String,
    name:String,
    balance: { type: Number, default: 0 },
})



const AddMoney = mongoose.model("AddMoney", addMoneySchema);


export default AddMoney;