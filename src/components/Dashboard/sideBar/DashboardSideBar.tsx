import { useState, type JSX } from "react"
import { useDarkMode } from "../../../context/DarkModeContext"
import Navigation from "./DashboardNavigation"
type SideBarType = {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function DashboardSideBar({ sidebarOpen, setSidebarOpen }: SideBarType) {
    const { darkMode } = useDarkMode()
    const [sidebarOpenedByButton, setSidebarOpenedByButton] = useState(false)

    return (
        <div className="dashboard-navigation-left-display">
            <div
                className="sidebar-nav-wrapper"
                onMouseEnter={() => !sidebarOpenedByButton && setSidebarOpen(true)}
                onMouseLeave={() => { !sidebarOpenedByButton && setSidebarOpen(false) }}
            >
                <Navigation sidebarOpen={sidebarOpen} />
            </div>
            <button
                onClick={() => {
                    setSidebarOpen(prev => !prev)
                    sidebarOpen ? setSidebarOpenedByButton(false) : setSidebarOpenedByButton(true)
                }}
                className={`sidebar-toggle ${!sidebarOpen && "minimized"}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={!darkMode ? "#1b1c1d" : "#f4f4f4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`sidebar-toggle-arrow ${darkMode && "dark"}`}><path d="m9 18 6-6-6-6" /></svg>
            </button>
        </div>
    )
}
