import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRoutes from './server/routes/routes.js';
import { createSampleProduct } from "./server/controllers/productControllers.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('📦 Connected to MongoDB');

        // Crear producto de muestra, eliminar
        const product = await createSampleProduct();
        console.log('🎲 Sample product created:', product);

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });
    } catch (error) {
        console.error('❌ Server error:', error);
        process.exit(1);
    }
};
startServer();

process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Rejection:', err);
    process.exit(1);
});