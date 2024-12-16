import express from "express";

import { getEmployees } from "../controllers/employeesController.js";

const router = express.Router();

router.get("/", getEmployees);

export default router;
