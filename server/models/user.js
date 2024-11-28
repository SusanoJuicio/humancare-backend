import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: String, required: true },
    gmail: { type: String, required: true },
    dni: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('User ', userSchema);