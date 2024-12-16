import express from "express";
import {
  getPublishersNames,
  getAllPublishers,
  createPublisher,
} from "../controllers/publisherController.js";

const router = express.Router();

router.get("/names", getPublishersNames);
router.get("/", getAllPublishers);
router.post("/", createPublisher);

export default router;
