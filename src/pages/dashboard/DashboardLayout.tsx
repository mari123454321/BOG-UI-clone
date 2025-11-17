import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/Dashboard/header/DashboardHeader";
import SideBar from "../../components/Dashboard/sideBar/SideBar";

export default function DashboardLayout() {
    return (
        <>
            <DashboardHeader />
            <div className="dashboard-content">
                <div className="sidebar-wrapper">
                    <SideBar />
                    
                </div>
                <div className="dashboard-main">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}