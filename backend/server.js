// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Define the port the server will run on
// Use the PORT from .env file, or default to 8000
const PORT = process.env.PORT || 8000;

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

// --- START THE SERVER ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});