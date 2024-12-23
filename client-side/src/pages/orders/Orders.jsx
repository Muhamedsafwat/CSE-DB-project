import axios from "axios";
import { useState, useEffect } from "react";

import { IoFileTrayStacked } from "react-icons/io5";

import AddButton from "../../components/Navigation/AddButton";
import TableSkeleton from "../../components/loaders/TableSkeleton";
import Table from "../../components/Table";

const Orders = () => {
  const tableCols = [
    { name: "OrderID", label: "ID" },
    { name: "NameCustomer", label: "Customer" },
    { name: "EmployeeID", label: "Employee ID" },
    { name: "PaymentMethod", label: "Payment Method" },
    { name: "TotalPrice", label: "Total Price" },
    { name: "Date", label: "Date" },
  ];
  //fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/orders");

    setIsLoading(false);
    setData(res.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
          <IoFileTrayStacked /> Orders
        </h1>
        <AddButton />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Table
          columns={tableCols}
          slug="orders"
          data={data}
          refresh={getData}
          idKey="idCustomer"
        />
      )}
    </>
  );
};

export default Orders;
