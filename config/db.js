import mongoose from "mongoose";

const connectDB = async () => {
  
  try {

    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://dhananjaywin15112004:ec2cY3Gk2HxizdS2@cluster.4jkps.mongodb.net/printingDB?retryWrites=true&w=majority")


    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
