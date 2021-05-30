import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async () => {

    const client = await mongoose.connect(databaseURL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database connected");
        }
    });
}




