import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import {
  Authors,
  AddAuthor,
  EditAuthor,
  Books,
  AddBook,
  EditBook,
  Customers,
  AddCustomer,
  EditCustomer,
  Employees,
  AddEmployee,
  EditEmployee,
  Orders,
  AddOrder,
  EditOrder,
  Statistics,
  Home,
} from "./pages";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/add" element={<AddAuthor />} />
          <Route path="/authors/edit/:id" element={<EditAuthor />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/customers/edit/:id" element={<EditCustomer />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/edit/:id" element={<EditEmployee />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />
          <Route path="/orders/edit/:id" element={<EditOrder />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
