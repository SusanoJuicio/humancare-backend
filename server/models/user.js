import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 }, // longitud máxima de 50 caracteres
    apellido: { type: String, required: true, maxlength: 50 }, // longitud máxima de 50 caracteres
    telefono: { type: String, required: true, maxlength: 20 }, // longitud máxima de 15 caracteres
    gmail: { type: String, required: true, maxlength: 100 }, // longitud máxima de 100 caracteres
    dni: { type: String, required: true, maxlength: 200 }, // longitud máxima de 20 caracteres
    password: { type: String, required: true }, // No longitud máxima 
}, { timestamps: true });

export default mongoose.model('User', userSchema);