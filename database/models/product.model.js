
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'product title is unique'],
        trim: true,
        required: [true, 'product title is required'],
        minLength: [2, 'too short product title']
    },
    price: {
        type: Number,
        required: [true, 'product price is required'],
        min: 0
    },
    description: {
        type: String,
        minLength: [5, 'too short product description'],
        maxLength: [300, 'too long product description'],
        required: [true, 'product description is required'],
        trim: true
    },
    imgCover: String,
    images: [String],
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: [true, 'product category is required'],
    },

});

export const productModel = mongoose.model('Product', productSchema);