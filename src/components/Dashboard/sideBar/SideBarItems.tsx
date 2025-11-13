import { useState } from "react"
import { NavLink } from "react-router-dom"
import type { SidebarItem as SidebarItemType } from "../../../info/dashboard/sidebarInfo"

type Props = {
    item: SidebarItemType
}

export default function SidebarItem({ item }: Props) {
    const [open, setOpen] = useState(false)

    const hasSubmenu = Boolean(item.submenu)

    return (
        <div className="sidebar-item">
            <button
                className="sidebar-button"
                onClick={() => hasSubmenu && setOpen(prev => !prev)}
            >
                <div className="sidebar-icon">{item.icon}</div>
                <span>{item.name}</span>

                <span className={`arrow ${open ? "open" : ""}`}>
                    ▼
                </span>

            </button>

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
        </div>
    );
}
