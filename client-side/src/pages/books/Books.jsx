import axios from "axios";
import { useState, useEffect } from "react";

import { PiBooks } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

import AddButton from "../../components/Navigation/AddButton";
import TableSkeleton from "../../components/loaders/TableSkeleton";
import Table from "../../components/Table";
const Customers = () => {
  const tableCols = [
    { name: "ISBN", label: "ISBN" },
    { name: "BookName", label: "Title" },
    { name: "AuthorName", label: "Author" },
    { name: "Language", label: "Language" },
    { name: "Price", label: "Price" },
    { name: "CategoryName", label: "Category" },
    { name: "quantity", label: "Quantity" },
  ];
  //fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const [searchReq, setSearchReq] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/books");
    setIsLoading(false);
    setData(res.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  useEffect(() => {
    const updateSearch = () => {
      if (searchReq.length > 0) {
        const filteredData = data.filter((book) =>
          book.BookName.toLowerCase().includes(searchReq.toLowerCase())
        );
        setSearchRes(filteredData);
      } else {
        setSearchRes(data);
      }
    };
    updateSearch();
  }, [searchReq, data]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
          <PiBooks /> Books
        </h1>
        <AddButton />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          <label className="text-xl font-semiBold flex items-center gap-1 mb-2 ">
            Search for a book <FaSearch size={15} />
          </label>
          <input
            onChange={(e) => setSearchReq(e.target.value)}
            placeholder="Search by book name"
            className={`bg-gray-100 w-full mt-1 border-2 border-gray-300 text-gray-900 text-sm rounded-md duration-150 focus:outline-none active:ring-0 focus:border-green-500 p-2.5`}
          />
          <Table
            columns={tableCols}
            slug="books"
            data={searchRes}
            refresh={getData}
            idKey="ISBN"
            deleteBtn
          />
        </>
      )}
    </>
  );
};

export default Customers;
