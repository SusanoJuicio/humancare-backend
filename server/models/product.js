// models/product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    customId: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        min: [0, 'Price must be greater than 0'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Please add an image URL'],
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'Stock must be at least 0'],
    },
    categories: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
}, {
    timestamps: true,
});

export default mongoose.model('Product', productSchema);