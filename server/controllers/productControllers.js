// import Product from '../models/product.js';

// const getRandomNumber = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1)) + min;

// const getRandomPrice = () =>
//     Number((Math.random() * (100 - 10) + 10).toFixed(2));

// // Función para crear producto de muestra, eliminar cuando haya formulario
// export const createSampleProduct = async () => {
//     try {
//         const randomNum = getRandomNumber(1, 100);
//         const newProduct = {
//             name: `BoardGame ${randomNum}`,
//             price: getRandomPrice(),
//             imageUrl: `https://picsum.photos/400/300?random=${randomNum}`,
//         };
//         return await Product.create(newProduct);
//     } catch (error) {
//         console.error('Error creating sample product:', error);
//         return null;
//     }
// };

// // Obtener todos los productos
// export const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find().select('-__v');
//         console.log('🟩 Getting Products');
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.json({ message: 'Error getting products' });
//     }
// };

// // Obtener un producto por ID
// export const getProduct = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         console.log('🟩 Getting Product');
//         res.json(product);
//     } catch (error) {
//         console.error(error);
//         res.json({ message: `Error getting product ${req.params.id}` });
//     }
// };