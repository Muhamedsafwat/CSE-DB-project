import { pool } from "../utils/db.js";

export const getAllOrders = async (req, res) => {
  const [rows] =
    await pool.query(`SELECT OrderID,NameCustomer,EmployeeID,Date,TotalPrice,PaymentMethod
FROM customer
INNER JOIN lll.order ON customer.idCustomer=lll.order.IDCustomer`);

  res.send(rows);
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

  try {
    // Fetch customer ID
    const [customerId] = await pool.query(
      "SELECT idCustomer FROM lll.customer WHERE PhoneNumber = ?",
      [Number(phone)]
    );
    if (customerId.length === 0) {
      return res.status(404).send("Customer not found");
    }
    const id = customerId[0].idCustomer;

    // Add order and retrieve OrderID
    const [addOrderResult] = await pool.query(
      "CALL add_order(?, ?, NOW(), ?)",
      [id, employeeId, paymentMethod]
    );

    // Extract the OrderID from the result of the procedure
    const [order] = await pool.query("SELECT LAST_INSERT_ID() AS OrderID");
    const orderId = order[0].OrderID;

    // Insert books into bookorder
    for (const book of books) {
      try {
        // Fetch ISBN for each book
        const [bookISBN] = await pool.query(
          "SELECT ISBN FROM book WHERE BookName = ?;",
          [book.name]
        );
        if (bookISBN.length === 0) {
          return res.status(404).send(`Book ${book.name} not found`);
        }
        const ISBN = bookISBN[0].ISBN;

        // Add bookorder
        await pool.query("CALL add_bookorder(?, ?, ?)", [
          ISBN,
          orderId,
          book.quantity,
        ]);
      } catch (error) {
        return res
          .status(500)
          .send(`Error processing book ${book.name}: ${error.message}`);
      }
    }

    res.send({ message: "Order created successfully", orderId });
  } catch (error) {
    res.status(500).send(`Error creating order: ${error.message}`);
  }
};

export const getInsights = async (req, res) => {
  const [response] = await pool.query(
    "SELECT SUM(TotalPrice) as totalIncome, COUNT(*) as NumOfOrders FROM lll.order;"
  );
  res.json(response[0]);
};

export const getOrdersByCustomerName = async (req, res) => {
  const { customerName } = req.body;
  try {
    const [[response]] = await pool.query("Call GetCustomerOrders(?);", [
      customerName,
    ]);
    res.json(response);
  } catch (err) {
    // console.error(err);
    res.status(404).send("No orders found for this customer");
  }
};
