import { useState, type JSX } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { sidebarList } from "../../../info/dashboard/sidebarInfo"
import SidebarItem from "./SideBarItems"
import { useDarkMode } from "../../../context/DarkModeContext"

type SideBarType = {
    sidebarOpen: boolean
}
export default function DashboardNavigation({ sidebarOpen }: SideBarType) {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()

    const sidebarListLang = sidebarList[language]
    const sidebarContents = sidebarListLang.map((item, index): JSX.Element => {
        return (
            <SidebarItem key={index} item={item} sidebarOpen={sidebarOpen} />
        )
    })
    return (
        <nav
            className={`sidebar-nav ${darkMode ? "dark" : ""} ${!sidebarOpen && "minimized"}`}>
            <div className="sidebar-scroll">
                <ul className="sidebar-content">
                    {sidebarContents}
                </ul>
            </div>
        </nav>
    )
}