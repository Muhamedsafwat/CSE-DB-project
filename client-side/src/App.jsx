import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import {
  Publishers,
  AddPublisher,
  Books,
  AddBook,
  EditBook,
  Customers,
  AddCustomer,
  Employees,
  Orders,
  AddOrder,
  Statistics,
  Home,
} from "./pages";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/publishers/add" element={<AddPublisher />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
