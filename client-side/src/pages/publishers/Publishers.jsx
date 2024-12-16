import axios from "axios";
import { useState, useEffect } from "react";

import { FaPencilAlt } from "react-icons/fa";

import AddButton from "../../components/Navigation/AddButton";
import TableSkeleton from "../../components/loaders/TableSkeleton";
import Table from "../../components/Table";
const Publishers = () => {
  const tableCols = [
    { name: "PublisherID", label: "id" },
    { name: "PublisherName", label: "Name" },
    { name: "PhoneNumber", label: "Phone Number" },
    { name: "Address", label: "Address" },
  ];
  //fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [publishers, setPublishers] = useState([]);

  const getPublishers = async () => {
    const response = await axios.get("http://localhost:3000/publishers");
    setPublishers(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getPublishers();
    }, 1500);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
          <FaPencilAlt /> Publishers
        </h1>
        <AddButton />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Table
          columns={tableCols}
          slug="authors"
          data={publishers}
          refresh={getPublishers}
          idKey="PublisherID"
        />
      )}
    </>
  );
};

export default Publishers;
