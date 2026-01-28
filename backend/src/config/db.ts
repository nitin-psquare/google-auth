import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB connection successful!');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
