// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 },
    apellido: { type: String, required: true, maxlength: 50 },
    telefono: { type: String, required: true, maxlength: 20 },
    gmail: { type: String, required: true, maxlength: 100 },
    dni: { type: String, required: true, maxlength: 200 },
    password: { type: String, required: true },
    purchases: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }]
}, { timestamps: true });

export default mongoose.model('User ', userSchema);