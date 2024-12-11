import SideBar from "../Navigation/SideBar";
import PageContainer from "./PageContainer";
import BackButton from "../Navigation/BackButton";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow flex flex-col items-center relative text-gray-800 bg-gray-50">
        <BackButton />
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};

export default Layout;
