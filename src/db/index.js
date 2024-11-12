import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstant.connection.host}`);;
    } catch (error) {
        console.log("Mongoose DB Error", error);
        process.exit(1);
    }
};