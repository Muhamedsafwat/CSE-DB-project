import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className=" text-gray-900 p-2 rounded-full hover:bg-gray-200 absolute top-8 left-8 duration-150 active:bg-gray-300"
    >
      <IoChevronBackOutline size={32} className="relative right-[1px]" />
    </button>
  );
};

export default BackButton;
