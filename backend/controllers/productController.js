// backend/controllers/productController.js

import Product from '../models/Product.js';

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // find({}) gets all documents
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
/**
 * @desc    Fetch a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
const createProduct = async (req, res) => {
  try {
    // We get the product data from the request body
    const { name, slug, brand, model, description, price, mrp, category, stock, images, tags, specifications, isFeatured } = req.body;

    const product = new Product({
      name,
      slug,
      brand,
      model,
      description,
      price,
      mrp,
      category,
      stock,
      images,
      tags,
      specifications,
      isFeatured
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @desc    Update a product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
const updateProduct = async (req, res) => {
  try {
    const { name, slug, brand, model, description, price, mrp, category, stock, images, tags, specifications, isFeatured } = req.body;
    
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.slug = slug || product.slug;
      product.brand = brand || product.brand;
      product.model = model || product.model;
      product.description = description || product.description;
      product.price = price || product.price;
      product.mrp = mrp || product.mrp;
      product.category = category || product.category;
      product.stock = stock || product.stock;
      //... and so on for other fields

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @desc    Delete a product
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };