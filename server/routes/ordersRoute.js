import express from "express";

import {
  createOrder,
  getAllOrders,
  getInsights,
} from "../controllers/ordersController.js";

const router = express.Router();

// Route definitions
router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/insights", getInsights);

export default router;
