import { connect } from "mongoose";
import env from "dotenv";
env.config();
export const dbConfig = async () => {
    try {
        await connect(process.env.URL_URl).then(() => {
            console.clear();
            console.log("connected.....🚀🚀❤️❤️");
        });
    }
    catch (error) {
        console.log(error);
    }
};
