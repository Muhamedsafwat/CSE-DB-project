import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IoFileTrayStacked } from "react-icons/io5";

import TableSkeleton from "../../components/loaders/TableSkeleton";
import Table from "../../components/Table";

const History = () => {
  const params = useParams();
  const tableCols = [
    { name: "EmployeeName", label: "Employee" },
    { name: "BookName", label: "Book name" },
    { name: "Quantity", label: "Quantity" },
    { name: "TotalBookPrice", label: "Book(s) price" },
    { name: "Date", label: "Date" },
  ];
  //fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/orders/customerOrders`,
        {
          customerName: params.id,
        }
      );
      setIsLoading(false);
      setData(res.data);
    } catch (e) {
      console.error(e);
      setNoData(true);
      setIsLoading(false);
    }
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
          <IoFileTrayStacked /> Orders History : {params.id}
        </h1>
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : !noData ? (
        <Table
          columns={tableCols}
          slug="orders"
          data={data}
          refresh={getData}
          // idKey="idCustomer"
        />
      ) : (
        <h1 className="text-center text-3xl font-medium mt-32">
          Customer has no orders
        </h1>
      )}
    </>
  );
};

export default History;
