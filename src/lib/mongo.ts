import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};
