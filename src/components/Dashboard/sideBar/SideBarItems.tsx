import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import type { SidebarItem as SidebarItemType } from "../../../info/dashboard/sidebarInfo"
import { useDarkMode } from "../../../context/DarkModeContext"
import { ChevronRight } from "lucide-react"

type Props = {
    item: SidebarItemType

    sidebarOpen: boolean

}

export default function SidebarItem({ item, sidebarOpen }: Props) {
    const { darkMode } = useDarkMode()
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const hasSubmenu = Boolean(item.submenu)
    const location = useLocation()
    const pathname = location.pathname

    const isSubmenuActive = (
        hasSubmenu && item.submenu!.some(sub =>
            pathname.includes(`/${sub.path}`)
        ))
    return (
        <li className="sidebar-item">
            {!item.submenu && item.path ? <NavLink
                to={item.path}
                className={({ isActive }) =>
                    // if the link is active or it's the main path
                    `${isActive || item.path==="main" && pathname==="/dashboard" ? "dashboard-sidebar-active-link" : ""} sidebar-navlink ${darkMode ? "dark" : ""}`
                }
            >
                <div className="sidebar-right">
                    <div className={`sidebar-icon ${darkMode && "dark"}`}>{item.icon}</div>
                    <span className={`sidebar-text ${darkMode && "dark"} ${!sidebarOpen && "minimized"}`}>{item.name}</span>
                </div>

                <span className={`sidebar-arrow ${submenuOpen ? "open" : ""} ${darkMode && "dark"} `}>
                    <ChevronRight width={16} height={16} />
                </span>

            </NavLink> :
                <button
                    className={`sidebar-button ${darkMode && "dark"} ${isSubmenuActive ? "dashboard-sidebar-active-link-button" : ""}`}
                    onClick={() => hasSubmenu && setSubmenuOpen(prev => !prev)}
                >
                    <div className="sidebar-right">
                        <div className={`sidebar-icon ${darkMode && "dark"}`}>{item.icon}</div>
                        <span className={`sidebar-text ${darkMode && "dark"} ${!sidebarOpen && "minimized"}`}>{item.name}</span>
                    </div>


                    <span className={`sidebar-arrow ${submenuOpen ? "open" : ""} ${darkMode && "dark"} has-submenu`}>
                        <ChevronRight width={16} height={16} className="icon-primary"/>
                    </span>

                </button>
            }

            {/* submenu */}
            {hasSubmenu && sidebarOpen && (
                <ul className={`submenu ${darkMode && "dark"} ${submenuOpen && "open"}`}>
                    {item.submenu!.map(sub => (
                        <li>
                            <NavLink
                                key={sub.path}
                                to={sub.path}
                                className={({ isActive }) =>
                                    `submenu-item ${isActive ? "dashboard-submenu-active-link" : ""} ${darkMode ? "dark" : ""} `
                                }
                            >
                                {sub.name}
                            </NavLink>
                        </li>

                    ))}
                </ul>
            )}
        </li>
    );
}
