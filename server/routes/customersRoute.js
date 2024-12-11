import express from "express";

import {
  deleteCustomerById,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customersController.js";

const router = express.Router();

// Route definitions
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomerById);
router.put("/:id", updateCustomer);

export default router;
