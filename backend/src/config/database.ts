import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected Succesfully ");
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1); // exit with failure. 0 means success
  }
};
