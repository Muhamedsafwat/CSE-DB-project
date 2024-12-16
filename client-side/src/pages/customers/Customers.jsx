import axios from "axios";
import { useState, useEffect } from "react";

import { HiOutlineUserGroup } from "react-icons/hi2";

import AddButton from "../../components/Navigation/AddButton";
import TableSkeleton from "../../components/loaders/TableSkeleton";
import Table from "../../components/Table";
const Customers = () => {
  const tableCols = [
    { name: "idCustomer", label: "id" },
    { name: "NameCustomer", label: "Name" },
    { name: "PhoneNumber", label: "Phone" },
    { name: "Email", label: "Email" },
  ];
  //fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/customers");
    setIsLoading(false);
    setData(res.data.rows[0]);
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
          <HiOutlineUserGroup /> Customers
        </h1>
        <AddButton />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Table
          columns={tableCols}
          slug="customers"
          data={data}
          refresh={getData}
          idKey="idCustomer"
          deleteBtn
        />
      )}
    </>
  );
};

export default Customers;
