import { pool } from "../utils/db.js";

export const getCategories = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT CategoryName from category");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};
