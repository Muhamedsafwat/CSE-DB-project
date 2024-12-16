// -------------- imports ---------------- //
//import essential packages
import express from "express";
import cors from "cors";

//import routers
import customersRouter from "./routes/customersRoute.js";
import ordersRouter from "./routes/ordersRoute.js";
import authorsRouter from "./routes/authorsRoute.js";
import publishersRouter from "./routes/publishersRoute.js";
import booksRouter from "./routes/booksRoute.js";
import categoriesRouter from "./routes/categoriesRoute.js";
import employeesRouter from "./routes/employeesRoute.js";

// --------- inintialize the server --------- //
const app = express();
app.use(express.json());
app.use(cors());

// ----------- implement routes ----------- //

app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/authors", authorsRouter);
app.use("/publishers", publishersRouter);
app.use("/books", booksRouter);
app.use("/categories", categoriesRouter);
app.use("/employees", employeesRouter);

// ------------- start the server ---------- //
//error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("internal server error: " + err.stack);
});

//listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
