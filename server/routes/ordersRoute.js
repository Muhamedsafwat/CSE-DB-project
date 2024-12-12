import express from "express";

import {
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  createOrder,
} from "../controllers/ordersController.js";

const router = express.Router();

// Route definitions
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);
router.post("/", createOrder);

export default router;
