import axios from "axios";
import useSWR from "swr";

import AddButton from "../../components/Navigation/AddButton";
import TableSkeleton from "../../components/loaders/TableSkeleton";
import TestingTable from "../../components/TestingTable";
const Customers = () => {
  const tableCols = ["Name", "Phone", "Email", "Email"];
  //fetch data
  const fetcher = (url) => axios.get(url);
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/customers",
    fetcher
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-5">Customers</h1>
        <AddButton />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TestingTable columns={tableCols} slug="customers" />
      )}
    </>
  );
};

export default Customers;
