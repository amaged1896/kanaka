import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/kanaka')
        .then(() => console.log(`Data base connection established`))
        .catch((err) => console.log(`Connection error: ${err}`));
};
