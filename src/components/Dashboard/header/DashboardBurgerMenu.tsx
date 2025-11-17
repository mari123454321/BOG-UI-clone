import DashboardNavigation from "../sideBar/DashboardNavigation";

type DashboardBurgerMenuProps = {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function DashboardBurgerMenu({ sidebarOpen, setSidebarOpen }: DashboardBurgerMenuProps) {

    return (
        <div className="dashboard-burger-menu">
            <div
                className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="dashboard-burger-navigation-wrapper">
                <DashboardNavigation sidebarOpen={sidebarOpen} />
            </div>
        </div>
    )
}