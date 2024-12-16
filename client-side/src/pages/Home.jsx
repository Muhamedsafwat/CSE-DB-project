import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaDollarSign,
  FaExternalLinkAlt,
  FaCartPlus,
} from "react-icons/fa";
import { IoFileTrayStacked } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbPackageImport } from "react-icons/tb";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ordersInsights, setOrdersInsights] = useState();
  const [customersCount, setCustomersCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const ordersRes = await axios.get(
        "http://localhost:3000/orders/insights"
      );
      setOrdersInsights(ordersRes.data);
      const customersCount = await axios.get(
        "http://localhost:3000/customers/count"
      );
      setCustomersCount(customersCount.data.customersCount);
      setIsLoading(false);
    };

    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        <FaChartBar /> Overview
      </h1>
      {!isLoading ? (
        <div className="flex gap-5 mt-2">
          <Card
            icon={<IoFileTrayStacked size={27} className="text-violet-600" />}
            title="Total orders"
            text={ordersInsights.NumOfOrders}
          />
          <Card
            icon={<FaDollarSign size={27} className="text-violet-600" />}
            title="Total revenue"
            text={`${Number(ordersInsights.totalIncome).toLocaleString()} EGP`}
          />
          <Card
            icon={<HiOutlineUserGroup size={27} className="text-violet-600" />}
            title="Active Customers"
            text={customersCount}
          />
        </div>
      ) : (
        <Skeleton />
      )}

      <h1 className="text-2xl font-semibold mb-4 mt-12 flex items-center gap-2">
        <FaExternalLinkAlt /> Quick Links
      </h1>
      <div className="flex gap-5">
        <QuickLink
          href="/orders/add"
          text="Place Order"
          icon={<FaCartPlus size={60} className="text-violet-800" />}
        />
        <QuickLink
          href="/books"
          text="New Stock"
          icon={<TbPackageImport size={60} className="text-violet-800" />}
        />
      </div>
    </div>
  );
};

export default Home;

const Card = ({ title, icon, text }) => {
  return (
    <div className=" bg-violet-100 px-7 py-5 flex-1 rounded-xl border-4 border-violet-200 hover:translate-y-[-5px] duration-200 cursor-pointer shadow-lg hover:shadow-xl">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        {icon}
        {title}
      </h2>
      <p className="text-2xl mt-2 font-extrabold pl-9">{text}</p>
    </div>
  );
};

const QuickLink = ({ href, text, icon }) => {
  return (
    <Link
      to={href}
      className=" bg-violet-100  aspect-video px-7 py-5 flex-grow rounded-xl border-4 border-violet-200 hover:translate-y-[-5px] duration-200 cursor-pointer shadow-lg hover:shadow-xl"
    >
      <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
        {icon}
        <p className="text-2xl font-semibold">{text}</p>
      </div>
    </Link>
  );
};

const Skeleton = () => {
  return (
    <div className="flex gap-5 mt-10 animate-pulse ">
      <div className="opacity-70 bg-violet-100 px-7 py-5 h-[116px] flex-grow rounded-xl border-4 border-violet-200 hover:translate-y-[-5px] duration-200 cursor-pointer shadow-lg hover:shadow-xl">
        <div className="w-60 h-4 rounded-lg bg-violet-300 mb-5" />
        <div className="w-40 h-4 rounded-lg bg-violet-500" />
      </div>
      <div className="opacity-70 bg-violet-100 px-7 py-5 h-[116px] flex-grow rounded-xl border-4 border-violet-200 hover:translate-y-[-5px] duration-200 cursor-pointer shadow-lg hover:shadow-xl">
        <div className="w-60 h-4 rounded-lg bg-violet-300 mb-5" />
        <div className="w-40 h-4 rounded-lg bg-violet-500" />
      </div>
      <div className="opacity-70 bg-violet-100 px-7 py-5 h-[116px] flex-grow rounded-xl border-4 border-violet-200 hover:translate-y-[-5px] duration-200 cursor-pointer shadow-lg hover:shadow-xl">
        <div className="w-60 h-4 rounded-lg bg-violet-300 mb-5" />
        <div className="w-40 h-4 rounded-lg bg-violet-500" />
      </div>
    </div>
  );
};
