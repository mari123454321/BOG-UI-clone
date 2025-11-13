import { useState } from "react"
import { NavLink } from "react-router-dom"
import type { SidebarItem as SidebarItemType } from "../../../info/dashboard/sidebarInfo"
import { useDarkMode } from "../../../context/DarkModeContext"

type Props = {
    item: SidebarItemType
}

export default function SidebarItem({ item }: Props) {
    const [open, setOpen] = useState(false)
    const { darkMode } = useDarkMode()

    const hasSubmenu = Boolean(item.submenu)
    const chevronRightIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="m9 18 6-6-6-6" /></svg>);

    return (
        <li className="sidebar-item">
            {!item.submenu && item.path ? <NavLink
                to={item.path}
                className={`sidebar-navlink ${darkMode && "dark"}`}
            >
                <div className="sidebar-right">
                    <div className={`sidebar-icon ${darkMode && "dark"}`}>{item.icon}</div>
                    <span className={`sidebar-text ${darkMode && "dark"}`}>{item.name}</span>
                </div>

                <span className={`sidebar-arrow ${open ? "open" : ""} ${darkMode && "dark"}`}>
                    {chevronRightIcon}
                </span>

            </NavLink> :
                <button
                    className={`sidebar-button ${darkMode && "dark"}`}
                    onClick={() => hasSubmenu && setOpen(prev => !prev)}
                >
                    <div className="sidebar-right">
                        <div className={`sidebar-icon ${darkMode && "dark"}`}>{item.icon}</div>
                        <span className={`sidebar-text ${darkMode && "dark"}`}>{item.name}</span>
                    </div>


                    <span className={`sidebar-arrow ${open ? "open" : ""} ${darkMode && "dark"} has-submenu`}>
                        {chevronRightIcon}
                    </span>

                </button>
            }

            {/* submenu */}
            {hasSubmenu && open && (
                <ul className={`submenu ${darkMode && "dark"}`}>
                    {item.submenu!.map(sub => (
                        <li>
                            <NavLink
                                key={sub.path}
                                to={sub.path}
                                className={`submenu-item ${darkMode && "dark"}`}
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
