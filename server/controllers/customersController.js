import { pool } from "../utils/db.js";

export const getAllCustomers = async (req, res) => {
  //run the query here
  res.send("Get all customers");
};

export const getCustomerById = async (req, res) => {
  const id = req.params.id;
  //run the query here
  res.send(`Get customerById : ${id}`);
};

export const deleteCustomerById = async (req, res) => {
  const id = req.params.id;
  //run the query here
  res.send(`Delete customerById : ${id}`);
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
