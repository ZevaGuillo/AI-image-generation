import mongoose from "mongoose";

export const dbConnection =async () => {
    try {
        
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('Database online');

    } catch (error) {
        console.log(error);
        throw new Error(`Error when strating the database: ${error}`)
    }
}