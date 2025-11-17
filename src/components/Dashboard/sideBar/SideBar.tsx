import { useEffect, useState, type JSX } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { sidebarList } from "../../../info/dashboard/sidebarInfo"
import SidebarItem from "./SideBarItems"
import { useDarkMode } from "../../../context/DarkModeContext"

export default function SideBar() {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarOpenedByButton, setSidebarOpenedByButton] = useState(false)
    // useEffect(() => {
    //     window.innerWidth > 1366 ? setSidebarOpen(true) : setSidebarOpen(false)
    // }, [])

    const sidebarListLang = sidebarList[language]
    const sidebarContents = sidebarListLang.map((item): JSX.Element => {
        return (
            <SidebarItem item={item} sidebarOpen={sidebarOpen} />
        )
    })
    return (
        <>
            <nav
                onMouseEnter={() => !sidebarOpenedByButton && setSidebarOpen(true)}
                onMouseLeave={() => { !sidebarOpenedByButton && setSidebarOpen(false) }}
                className={`sidebar-nav ${darkMode ? "dark" : ""} ${!sidebarOpen && "minimized"}`}>
                <div className="sidebar-scroll">
                    <ul className="sidebar-content">
                        {sidebarContents}
                    </ul>
                </div>
            </nav>
            <button
                onClick={() => {
                    setSidebarOpen(prev => !prev)
                    sidebarOpen ? setSidebarOpenedByButton(false) : setSidebarOpenedByButton(true)
                }}
                className={`sidebar-toggle ${!sidebarOpen && "minimized"}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={!darkMode ? "#1b1c1d": "#f4f4f4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`sidebar-toggle-arrow ${darkMode && "dark"}`}><path d="m9 18 6-6-6-6" /></svg>
            </button>
        </>
    )
}