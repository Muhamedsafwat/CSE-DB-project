import { Link } from "react-router";
import { useLocation } from "react-router-dom";

//icons
import { FaHome, FaPencilAlt, FaCode } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoFileTrayStacked } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";

const links = [
  { label: "home", href: "/", icon: <FaHome /> },
  { label: "customers", href: "/customers", icon: <HiOutlineUserGroup /> },
  { label: "orders", href: "/orders", icon: <IoFileTrayStacked /> },
  { label: "books", href: "/books", icon: <PiBooks /> },
  { label: "authors", href: "/authors", icon: <FaPencilAlt /> },
  { label: "employees", href: "/employees", icon: <HiOutlineUserGroup /> },
  { label: "statistics", href: "/statistics", icon: <SiGoogleanalytics /> },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="bg-gray-900 text-white h-screen w-[18%] py-10 shadow-md flex flex-col justify-between">
      <h1 className="text-xl font-bold mb-8 mx-10">Book store</h1>
      <ul className="mb-32">
        {links.map((link) => (
          <li
            key={link.label}
            className={`text-lg capitalize px-5 py-2 duration-200 border-4 border-transparent ${
              ((location.pathname.includes(link.href) && link.href != "/") ||
                location.pathname == link.href) &&
              "bg-violet-400 pl-7 border-r-violet-700"
            }`}
          >
            <Link to={link.href} className="flex items-center gap-3">
              {link.icon}
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mx-10 flex items-center gap-2">
        <FaCode size={25} className="text-violet-300" /> CSE @27
      </div>
    </div>
  );
};

export default SideBar;
