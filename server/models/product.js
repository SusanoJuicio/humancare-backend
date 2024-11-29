// import mongoose from 'mongoose';
// const { Schema, model } = mongoose;

// const productSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//             maxlength: 50,
//         },
//         price: {
//             type: Number,
//             required: [true, 'Please add a price'],
//             min: [0, 'Price must be greater than 0'],
//         },
//         imageUrl: {
//             type: String,
//             required: [true, 'Please add an image URL'],
//         },
//     },
//     {
//         timestamps: true,
//         toJSON: { virtuals: true },
//         toObject: { virtuals: true },
//     }
// );
// // Método virtual para formatear precio
// productSchema.virtual('formattedPrice').get(function () {
//     return `$${this.price.toFixed(2)}`;
// });

// // Método para generar URL de la API
// productSchema.virtual('apiUrl').get(function () {
//     return `/api/products/${this._id}`;
// });

// export default model('Product', productSchema);