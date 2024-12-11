
import Product from '../models/product.js';
import User from '../models/user.js';

export const purchaseProduct = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {

        const numId = parseInt(productId)
        const product = await Product.findOne({ customId: numId });
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }


        if (product.stock < quantity) {
            return res.status(400).json({ message: 'Stock insuficiente' });
        }


        product.stock -= quantity;
        await product.save();


        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }


        user.purchases.push({ numId, quantity });
        await user.save();

        res.status(200).json({ message: 'Compra realizada con éxito', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al procesar la compra', error });
    }
};


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};


export const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find().limit(6);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos destacados' });
    }
};