import express from "express";
import {
  getAllBooks,
  addBook,
  deleteBook,
  updateQuantity,
  getBooksNames,
} from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.delete("/:ISBN", deleteBook);
router.put("/:ISBN", updateQuantity);
router.get("/names", getBooksNames);

export default router;
