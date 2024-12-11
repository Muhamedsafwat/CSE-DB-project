import React from "react";
import axios from "axios";
import swal from "sweetalert";

const TestingTable = ({ columns, data, slug }) => {
  //Dynamic delete handler
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:3000/${slug}/${id}`)
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Done",
          text: `${slug.slice(0, -1).toUpperCase()} Deleted Successfully!`,
          icon: "success",
        });
      })
      .catch((error) => console.error(error));
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
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">Manager</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">Sales</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">john.doe@example.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-4 border-orange-600  duration-200">
                Edit
              </button>
              <button
                onClick={() => deleteHandler(5)}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold text-xs py-1 px-2 rounded-lg border-4 border-red-700 duration-200"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                Jane Smith
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">Salesperson</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">Marketing</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                jane.smith@example.com
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-4 border-orange-600  duration-200">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold text-xs py-1 px-2 rounded-lg border-4 border-red-700 duration-200">
                Delete
              </button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                Michael Johnson
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">IT Specialist</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">IT</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                michael.johnson@example.com
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-4 border-orange-600  duration-200">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold text-xs py-1 px-2 rounded-lg border-4 border-red-700 duration-200">
                Delete
              </button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                Emily Davis
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">HR Manager</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">HR</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                emily.davis@example.com
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-4 border-orange-600  duration-200">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold text-xs py-1 px-2 rounded-lg border-4 border-red-700 duration-200">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestingTable;
