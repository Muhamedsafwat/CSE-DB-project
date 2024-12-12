import { pool } from "../utils/db.js";

export const getAllCustomers = async (req, res) => {
  //run the query here
  const rows = await pool.query("SELECT * FROM customer;");
  res.json({ rows });
};

export const getCustomerById = async (req, res) => {
  const id = req.params.id;
  //run the query here
  res.send(`Get customerById : ${id}`);
};

export const deleteCustomerById = async (req, res) => {
  const id = req.params.id;
  const response = pool.query(
    `DELETE FROM customer WHERE (idCustomer = ${id});`
  );
  res.send(`Customer with id ${id} deleted successfully`);
};

export const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  //run the query here
  res.json({
    message: "Customer updated successfully",
    newDetails: { name, email },
  });
};

export const createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  //run the query here
  console.log(`${name},${phone},${email}`);
  const response = await pool.query(
    "insert into customer (NameCustomer,PhoneNumber,Email) values (?,?,?)",
    [name, Number(phone), email]
  );
  res.json({
    message: "Customer added successfully",
    newDetails: { name, email },
  });
};

export const getCustomerNumbers = async (req, res) => {
  const [numbers] = await pool.query("select PhoneNumber from customer");
  res.json(numbers);
};
