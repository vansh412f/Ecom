// backend/models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // For clean URLs
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    images: [{ type: String }], // Array of image URLs
    tags: [{ type: String }],
    specifications: [
      {
        key: { type: String }, // e.g., "Screen Size"
        value: { type: String }, // e.g., "75 inches"
      },
    ],
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    isFeatured: { type: Boolean, default: false },
  },
  {
    // Mongoose option to automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;