import { useState } from "react"
import { NavLink } from "react-router-dom"
import type { SidebarItem as SidebarItemType } from "../../../info/dashboard/sidebarInfo"

type Props = {
    item: SidebarItemType
}

export default function SidebarItem({ item }: Props) {
    const [open, setOpen] = useState(false)

    const hasSubmenu = Boolean(item.submenu)
    const chevronRightIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="m9 18 6-6-6-6" /></svg>);

    return (
        <li className="sidebar-item">
            {!item.submenu && item.path ? <NavLink
                to={item.path}
                className="sidebar-navlink"
            >
                <div className="sidebar-right">
                    <div className="sidebar-icon">{item.icon}</div>
                    <span className="sidebar-text">{item.name}</span>
                </div>

                <span className={`arrow ${open ? "open" : ""}`}>
                    {chevronRightIcon}
                </span>

            </NavLink> :
                <button
                    className="sidebar-button"
                    onClick={() => hasSubmenu && setOpen(prev => !prev)}
                >
                    <div className="sidebar-right">
                        <div className="sidebar-icon">{item.icon}</div>
                        <span className="sidebar-text">{item.name}</span>
                    </div>


                    <span className={`arrow ${open ? "open" : ""}`}>
                        {chevronRightIcon}
                    </span>

                </button>
            }
            {/* submenu */}
            {hasSubmenu && open && (
                <div className="submenu">
                    {item.submenu!.map(sub => (
                        <NavLink
                            key={sub.path}
                            to={sub.path}
                            className="submenu-item"
                        >
                            {sub.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </li>
    );
}
