// mongoose connected to data
import mongoose from 'mongoose';

// schema or blueprint of product
const productSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    discount: Number,
    rating: Number,
    description: String,
    brand: String,

});

// modal
const productmodal = mongoose.model('product', productSchema);
export default productmodal;