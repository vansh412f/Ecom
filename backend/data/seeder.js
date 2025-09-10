// backend/data/seeder.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { sampleProducts } from './products.js';
import Product from '../models/Product.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for Seeder...');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    // Clear existing products
    await Product.deleteMany();

    // Insert the sample products
    await Product.insertMany(sampleProducts);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const runSeeder = async () => {
  await connectDB();
  
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
};

runSeeder();