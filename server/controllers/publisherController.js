import { pool } from "../utils/db.js";

//get publishers names
export const getPublishersNames = async (req, res) => {
  //run the query here
  const [rows] = await pool.query("SELECT PublisherName FROM publisher;");
  res.json(rows);
};

//get all publishers data
export const getAllPublishers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM publisher;");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching publishers" });
  }
};

//create publisher
export const createPublisher = async (req, res) => {
  const { name, phone, address } = req.body;
  try {
    await pool.query(
      "INSERT INTO publisher (PublisherName, PhoneNumber, Address) VALUES (?, ?, ?)",
      [name, phone, address]
    );
    res.json({
      message: "Publisher added successfully",
      newDetails: { name, phone, address },
    });
  } catch (error) {
    res.status(500).json({ error: "Error adding publisher" });
  }
};
