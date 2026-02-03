import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;