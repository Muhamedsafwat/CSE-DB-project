import React from "react";

const LoadingPlaceholder = () => {
  return (
    <div className="overflow-x-auto animate-pulse rounded-md border-2 border-gray-200 mt-8">
      {/*table with dummy data*/}
      <table className="min-w-full divide-y divide-gray-20">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 duration-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoadingPlaceholder;
