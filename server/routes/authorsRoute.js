import express from "express";
import { getAllAuthors } from "../controllers/authorsController.js";

const router = express.Router();

router.get("/", getAllAuthors);

export default router;
