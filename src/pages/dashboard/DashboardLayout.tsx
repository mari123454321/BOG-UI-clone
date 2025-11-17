import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "../../components/Dashboard/header/DashboardHeader";
import DashboardSideBar from "../../components/Dashboard/sideBar/DashboardSideBar";

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="dashboard-content">
                <div className="sidebar-wrapper">
                    <DashboardSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                <div className="dashboard-main">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}