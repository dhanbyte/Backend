import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  customerName: String,
  paperType: String,
  windowCutting: String,
  quantity: Number,
  file: String,
  specialRemark: String,
  flapOpening: String,
  userId: String,
  totalWithGst: Number,
  productName:String,
},{
  versionKey:false
})


const Order = mongoose.model("Order", OrderSchema);
export default Order;
