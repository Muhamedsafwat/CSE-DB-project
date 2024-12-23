import SideBar from "../Navigation/SideBar";
import PageContainer from "./PageContainer";
import BackButton from "../Navigation/BackButton";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[82%] ml-auto flex flex-col items-center relative text-gray-800 min-h-screen">
        <BackButton />
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};

export default Layout;
