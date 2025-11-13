import type { JSX } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { sidebarList } from "../../../info/dashboard/sidebarInfo"
import SidebarItem from "./SideBarItems"

export default function SideBar(){
    const {language} = useLanguage()
    const sidebarListLang = sidebarList[language]
    const sidebarContents = sidebarListLang.map((item):JSX.Element=>{return(
        <SidebarItem item={item} />
    )})
    return(
        <nav className="sidebar-content">
            {sidebarContents}
        </nav>
    )
}