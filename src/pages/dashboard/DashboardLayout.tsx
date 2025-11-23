import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "../../components/Dashboard/header/DashboardHeader";
import DashboardSideBar from "../../components/Dashboard/sideBar/DashboardSideBar";

import Footer from "../../components/common/Footer";
import { useDarkMode } from "../../context/DarkModeContext";

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const {darkMode} = useDarkMode()
    return (
        <>
            <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="dashboard-content">
                    <DashboardSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className={`dashboard-pages ${darkMode ? "dark" : ""}`}>
                    <div className={`dashboard-outlet ${darkMode ? "dark" : ""}`}>
                        <Outlet />
                    </div>
                    <div className="dasboard-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}