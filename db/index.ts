
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL as string);
    if (res.connection.db) {
      console.log(`mongoDB connnected:${res.connection.db.databaseName}`);
    } else {
      console.log(`mongoDB connection error: ${res.connection.db}`);
    }
  } catch (err) {
    console.log(`mongoDB connection error: ${err}`);
  }
};

