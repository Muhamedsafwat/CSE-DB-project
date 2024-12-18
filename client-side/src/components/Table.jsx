import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { MdDeleteOutline } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = ({ columns, data, slug, refresh, idKey, deleteBtn }) => {
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
          text: `Cannot delete ${slug.slice(
            0,
            -1
          )} because it's already used in another table`,
          icon: "error",
        });
      });
    setLoadingBtn(null);
  };

  //update book quantity
  const updateBookQuantity = (isbn) => {
    swal({
      title: "Enter Added Quantity",
      content: {
        element: "input",

        attributes: {
          defaultValue: 1,
          min: 1,
          type: "number",
          placeholder: "Enter your number",
        },
      },
      buttons: {
        cancel: "Cancel",
        confirm: {
          text: "Submit",
          closeModal: false,
        },
      },
    }).then((value) => {
      if (!value) return; // User clicked cancel

      // API call using Axios
      axios
        .put(`http://localhost:3000/books/${isbn}`, { quantity: value })
        .then((response) => {
          swal("Success!", "Your quantity was updated.", "success");
          refresh();
        })
        .catch((error) => {
          swal("Error", "There was a problem submitting your number.", "error");
        });
    });
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
                className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase border-l-gray-200 border-2 border-t-0"
              >
                {col.label}
              </th>
            ))}
            {deleteBtn && (
              <th
                scope="col"
                className="py-3 px-2 text-center text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {[...data].reverse().map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 duration-200">
              {columns.map((column) => {
                return (
                  <td
                    key={column.name}
                    className="px-4 py-2 border border-gray-300"
                  >
                    {column.name == "Date"
                      ? item[column.name].slice(0, 10)
                      : item[column.name]}
                  </td>
                );
              })}
              {deleteBtn && (
                <td className=" py-4 px-2 flex items-center justify-center gap-2 whitespace-nowrap text-center text-sm font-medium">
                  {slug == "books" && (
                    <button
                      onClick={() => updateBookQuantity(item.ISBN)}
                      className={
                        "bg-orange-500 h-full disabled:opacity-30 hover:bg-orange-600 text-white font-semibold text-xs p-2 rounded-full border-2 border-orange-600 duration-200"
                      }
                    >
                      Qtty
                    </button>
                  )}
                  {slug == "customers" && (
                    <Link to={`${item.NameCustomer}`}>
                      <button
                        className={
                          "bg-orange-400 h-full disabled:opacity-30 hover:bg-orange-500 text-white font-semibold text-xs p-1 rounded-full border-2 border-orange-500 duration-200"
                        }
                      >
                        <FaHistory size={20} />
                      </button>
                    </Link>
                  )}
                  <button
                    disabled={loadingBtn === index}
                    onClick={() => deleteHandler(index)}
                    className={
                      "bg-red-500 disabled:opacity-30 hover:bg-red-600 text-white font-semibold text-xs p-1 rounded-full border-2 border-red-700 duration-200"
                    }
                  >
                    <MdDeleteOutline size={24} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
