// backend/routes/productRoutes.js

import express from 'express';
import { 
  getAllProducts, 
  getProductById, 
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(createProduct);

// Add the new PUT and DELETE methods to this route
router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;