import { pool } from "../utils/db.js";

export const getAllAuthors = async (req, res) => {
  const [rows] = await pool.query("SELECT AuthorName FROM author;");
  res.json(rows);
};
