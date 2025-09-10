// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 8000;

// --- DATABASE CONNECTION ---
// 2. Create a function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// 3. Call the connection function
connectDB();

// --- MIDDLEWARE ---
// Enable CORS for all routes, allowing our frontend to communicate with this backend
app.use(cors());
// Allow the server to parse incoming JSON data
app.use(express.json());

// --- ROUTES ---
// A simple test route to make sure the server is working
app.get('/', (req, res) => {
  res.send('WowCart Backend API is running!');
});
// 2. Use the product routes
// Any request to '/api/products' will be handled by our productRoutes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes); 
// --- START THE SERVER ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});