import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-body">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
