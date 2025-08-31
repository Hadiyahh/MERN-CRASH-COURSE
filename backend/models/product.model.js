import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true, // If it doesnt havent a name, it will throw an error
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);
// The reason we put Product is that it will automatically pluralize the name to 'products' in the database

export default Product;