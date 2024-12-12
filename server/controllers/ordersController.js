import { pool } from "../utils/db.js";

export const getAllOrders = async (req, res) => {
  //run the query here
  const rows = await pool.query("SELECT * FROM customer;");
  res.json({ rows });
};

export const getOrderById = async (req, res) => {
  const id = req.params.id;
  //run the query here
  res.send(`Get customerById : ${id}`);
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const response = pool.query(
    `DELETE FROM customer WHERE (idCustomer = ${id});`
  );
  res.send(`Customer with id ${id} deleted successfully`);
};

export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  //run the query here
  res.json({
    message: "Customer updated successfully",
    newDetails: { name, email },
  });
};

export const createOrder = async (req, res) => {
  const { phone, employeeId, paymentMethod, books } = req.body;
  const [customerId] = await pool.query(
    "SELECT idCustomer FROM lll.customer WHERE PhoneNumber = ?",
    [Number(phone)]
  );
  const id = customerId[0].idCustomer;
  const [addOrderResult] = await pool.query("CALL add_order(?, ?, NOW() , ?)", [
    id,
    employeeId,
    paymentMethod,
  ]);

  console.log(books);

  books.forEach(async (book) => {
    await pool.query("call add_bookorder( ? , LAST_INSERT_ID() , ?)", [
      book.ISBN,
      book.quantity,
    ]);
  });
  res.send(books);
};
