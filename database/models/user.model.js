import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: [2, 'Min length is 2 characters'],
        maxLength: [20, 'Max length is 20 characters']
    },
    password: {
        type: String,
        required: true,
        minLength: [2, 'Min length is 2 characters'],
        maxLength: [20, 'Max length is 20 characters'],
    }
});

export const userModel = mongoose.model('User', userSchema);