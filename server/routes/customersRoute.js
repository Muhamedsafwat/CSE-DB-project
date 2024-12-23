import express from "express";

import {
  deleteCustomerById,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  createCustomer,
  getCustomerNumbers,
  getCustomersCount,
} from "../controllers/customersController.js";

const router = express.Router();

// Route definitions
router.get("/", getAllCustomers);
router.get("/numbers", getCustomerNumbers);
router.get("/count", getCustomersCount);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomerById);
router.put("/:id", updateCustomer);
router.post("/", createCustomer);

export default router;
