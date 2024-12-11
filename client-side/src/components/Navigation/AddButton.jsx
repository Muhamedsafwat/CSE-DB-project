import { useNavigate, useLocation } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const AddButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    const newPath = `${location.pathname}/add`;
    navigate(newPath);
  };

  return (
    <button
      onClick={handleNavigation}
      className="bg-green-400 border-4 border-green-500 text-white p-2 rounded-full hover:bg-green-500 duration-200 shadow-xl "
    >
      <BiPlus size={26} />
    </button>
  );
};

export default AddButton;
