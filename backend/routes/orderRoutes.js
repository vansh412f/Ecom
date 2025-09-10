import express from 'express';
import { addOrderItems, getMyOrders, getAllOrders } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);

// Logged-in user gets their own orders
router.route('/myorders').get(protect, getMyOrders);

export default router;