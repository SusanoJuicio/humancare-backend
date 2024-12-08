// controllers/productControllers.js
import Product from '../models/product.js';
import User from '../models/user.js';

export const purchaseProduct = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        // Buscar el producto
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Verificar si hay suficiente stock
        if (product.stock < quantity) {
            return res.status(400).json({ message: 'Stock insuficiente' });
        }

        // Actualizar el stock del producto
        product.stock -= quantity;
        await product.save();

        // Agregar la compra al usuario
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Agregar la compra al array de compras del usuario
        user.purchases.push({ productId, quantity });
        await user.save();

        res.status(200).json({ message: 'Compra realizada con éxito', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al procesar la compra', error });
    }
};

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

// Obtener los primeros 6 productos
export const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find().limit(6); // Limitar a 6 productos
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos destacados' });
    }
};