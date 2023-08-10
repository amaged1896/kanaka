import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'name is required'],
        trim: true,
        required: true,
        minLength: [2, 'too short category name'],
        maxLength: [30, 'too long category name'],
    },
    image: String,
}, { timestamps: true });

export const categoryModel = mongoose.model('category', categorySchema);