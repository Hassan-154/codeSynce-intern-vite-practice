import "../style/layout.css";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="layout">
      <div className="side">
        <SideBar />
      </div>
      <div className="head">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
