import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from './server/routes/routes.js';
import productRoutes from "./server/routes/productRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes)
app.use("/users", userRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
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