import DashboardHeader from "../components/Dashboard/header/DashboardHeader";
import Main from "../components/Dashboard/Main/Main";
import SideBar from "../components/Dashboard/sideBar/SideBar";

export default function Dashboard() {
    return (
        <>
            <DashboardHeader />
            <div className="dashboard-content">
                <div className="sidebar-wrapper">
                    <SideBar />
                </div>
                <div className="dashboard-main">
                    <Main />
                </div>
            </div>
        </>
    )
}