import { useState } from "react";
import AddButton from "../../components/Navigation/AddButton";
import { HiOutlineUserGroup } from "react-icons/hi2";
import swal from "sweetalert";

const Employees = () => {
  //states
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandler = (id) => {
    setIsLoading(true);
    //delete request here
    setTimeout(() => {
      setIsLoading(false);
      swal(`Employee deleted! ${id}`, {
        icon: "success",
        timer: 1500,
      });
    }, 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
          <HiOutlineUserGroup /> Employees
        </h1>
        <AddButton />
      </div>
      <div className="overflow-x-auto border-2 border-gray-200 shadow-lg mt-8 rounded-lg">
        {/*table with dummy data*/}
        <table className="min-w-full divide-y divide-gray-200  ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Email
              </th>
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
                <div className="text-sm font-medium text-gray-900">
                  John Doe
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Manager</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Sales</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  john.doe@example.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="mr-2 bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs py-1 px-2 rounded-lg  border-4 border-orange-600  duration-200">
                  Edit
                </button>
                <button
                  disabled={isLoading}
                  onClick={() => deleteHandler("test id")}
                  className="bg-red-500 hover:bg-red-700 w-16 text-white font-semibold text-xs py-1 px-2 rounded-lg border-4 border-red-700 duration-200 disabled:opacity-50"
                >
                  {isLoading ? "Loading" : "Delete"}
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
    </>
  );
};

export default Employees;
