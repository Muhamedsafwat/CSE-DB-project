import express from "express";

import {
  createOrder,
  getAllOrders,
  getInsights,
  getOrdersByCustomerName,
} from "../controllers/ordersController.js";

const router = express.Router();

// Route definitions
router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/insights", getInsights);
router.post("/customerOrders", getOrdersByCustomerName);

export default router;
