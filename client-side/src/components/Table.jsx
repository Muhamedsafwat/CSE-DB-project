import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Table = ({ columns, data, slug, refresh, idKey }) => {
  const [loadingBtn, setLoadingBtn] = useState(null);

  //Dynamic delete handler
  const deleteHandler = (index) => {
    const id = [...data].reverse()[index][idKey];
    console.log(id);
    setLoadingBtn(index);
    axios
      .delete(`http://localhost:3000/${slug}/${id}`)
      .then((response) => {
        swal({
          title: "Done",
          text: `${slug.slice(0, -1).toUpperCase()} Deleted Successfully!`,
          icon: "success",
        });
        refresh();
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "An error occurred",
          text: `Make sure the server is running and check the console.`,
          icon: "error",
        });
      });
    setLoadingBtn(null);
  };

  return (
    <div className="overflow-x-auto mt-8 border-2 border-gray-200 rounded-lg shadow-lg ">
      {/*table with dummy data*/}
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                {col}
              </th>
            ))}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {[...data].reverse().map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 duration-200">
              {columns.map((column) => {
                return (
                  <td key={column} className="px-4 py-2 border border-gray-300">
                    {item[column]}
                  </td>
                );
              })}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-2 border-orange-600  duration-200">
                  Edit
                </button>
                <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold text-xs py-1 px-2 rounded-lg border-2 border-red-700 duration-200"
                >
                  {loadingBtn == index ? "Loading" : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
