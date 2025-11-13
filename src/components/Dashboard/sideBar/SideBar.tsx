import type { JSX } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { sidebarList } from "../../../info/dashboard/sidebarInfo"
import SidebarItem from "./SideBarItems"
import { useDarkMode } from "../../../context/DarkModeContext"

export default function SideBar() {
    const { language } = useLanguage()
    const {darkMode} = useDarkMode()
    const sidebarListLang = sidebarList[language]
    const sidebarContents = sidebarListLang.map((item): JSX.Element => {
        return (
            <SidebarItem item={item} />
        )
    })
    return (
        <nav className={`sidebar-nav ${darkMode ? "dark" : ""}`}>
            <ul className="sidebar-content">
                {sidebarContents}
            </ul>
        </nav>
    )
}