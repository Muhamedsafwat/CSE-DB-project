import { pool } from "../utils/db.js";

//get all books
export const getAllBooks = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT 
    author.AuthorName,
    book.BookName,
    book.Language,
    book.Price,
    category.CategoryName,
    book.ISBN,
    book.quantity
FROM 
    book
INNER JOIN 
    author ON book.AuthorID = author.AuthorID
INNER JOIN 
    category ON book.CategoryID = category.CategoryID;`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching books" });
  }
};

export const addBook = async (req, res) => {
  const { ISBN, author, category, language, name, price, publisher, quantity } =
    req.body;
  let authorID;
  let publisherID;
  let categoryID;

  // get publisher id
  const [publishers] = await pool.query(
    "SELECT PublisherID FROM publisher WHERE (PublisherName = ?);",
    [publisher]
  );
  publisherID = publishers[0].PublisherID;

  //check if author exists
  const [authors] = await pool.query(
    "SELECT * FROM author WHERE (AuthorName = ?);",
    [author]
  );
  const authorExists = !!authors.length;
  //if author exists get his ID
  if (authorExists) {
    authorID = authors[0].AuthorID;
    //if author does not exist Add it with the publisher ID
  } else {
    const [response] = await pool.query(
      "INSERT INTO author (AuthorName, PublisherID) VALUES (? , ?);",
      [author, publisherID]
    );
    authorID = response.insertId;
  }

  //check if category exists
  const [categories] = await pool.query(
    "SELECT CategoryID FROM category WHERE (CategoryName = ?);",
    [category]
  );
  const categoryExists = !!categories.length;
  //if category exists get its ID
  if (categoryExists) {
    categoryID = categories[0].CategoryID;
  } else {
    //create a category if it doesn't exist
    const [response] = await pool.query(
      "INSERT INTO category (CategoryName) VALUES (?);",
      [category]
    );
    categoryID = response.insertId;
  }

  //create new book
  await pool.query(
    `INSERT INTO book (ISBN, BookName, AuthorID, Language, Price, CategoryID, quantity)
     VALUES (?, ? , ? , ? , ? , ? ,? )`,
    [ISBN, name, authorID, language, price, categoryID, quantity]
  );

  res.json({ message: "Book added successfully" });
};

//delete a book
export const deleteBook = async (req, res) => {
  const ISBN = req.params.ISBN;
  try {
    await pool.query("DELETE FROM book WHERE ISBN = ?", [ISBN]);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting book" });
  }
};

//update quantity
export const updateQuantity = async (req, res) => {
  const ISBN = req.params.ISBN;
  const { quantity } = req.body;
  try {
    await pool.query(
      "UPDATE book SET quantity = (quantity + ?) WHERE ISBN = ?",
      [quantity, ISBN]
    );
    res.json({ message: "Quantity updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating quantity" });
  }
};

//get books names
export const getBooksNames = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT BookName FROM book;");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching books names" });
  }
};
