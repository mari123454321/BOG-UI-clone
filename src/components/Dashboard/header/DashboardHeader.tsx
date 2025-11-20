import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import searchIcon from "../../../icons/search.svg"
import darkModeIcon from "../../../icons/dark_mode.svg"
import lightModeIcon from "../../../icons/light_mode.svg"
import switchIcon from "../../../icons/apps.svg"
import notifications from "../../../icons/notifications.svg"
import dropDownIcon from "../../../icons/arrow_drop_down.svg"
import { useRef, useState } from "react"
import DropDownWrapper from "./DropDownWrapper"
import NotificationDropDown from "./NotificationDropDown"
import ProfileDropDown from "./ProfileDropDown"
import SwitchDropDown from "./SwitchDropDown"
type DropDownKeys = "notifications" | "switch" | "profile"
import { ProfileDropDownInfo } from "../../../info/info"
import DashboardBurgerMenu from "./DashboardBurgerMenu"

type DashboardHeaderProps = {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
    //current language context
    const { language } = useLanguage()
    // dark mode context
    const { darkMode, setDarkMode } = useDarkMode()
    //full naem in correct language
    const currFullname = ProfileDropDownInfo[language].username

    const iconsClass = `dashboard-header-right-icon ${darkMode && "dark"}`

    //dropdown menu
    const notificationsButtonRef = useRef<HTMLButtonElement>(null)
    const switchButtonRef = useRef<HTMLButtonElement>(null)
    const profileButtonRef = useRef<HTMLButtonElement>(null)
    //for conditionallt rendering dropdown menu
    const [dropDownState, setDropDownState] = useState<Record<DropDownKeys, boolean>>({
        notifications: false,
        switch: false,
        profile: false
    })

    function toggleDropDown(key: DropDownKeys) {
        setDropDownState(prev => ({
            notifications: false,
            switch: false,
            profile: false,
            [key]: !prev[key]
        })
        )
    }

    return (
        <div className={`dashboard-header-wrapper ${darkMode && "dark"}`}>
            <header className="dashboard-header">
                <div className="dashboard-header-left">
                    <img src="BOGlogo.png" />
                    <h2>{language === "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA"}</h2>
                </div>

                <div className={`dashboard-header-form-wrapper ${darkMode && "dark"}`}>
                    <div className="dashboard-header-form">
                        <img src={searchIcon} alt="search icon" width={16} height={16} />
                        <input className="dashboard-header-input" type="text" name="Search" placeholder="Search" />
                    </div>
                </div>
                {/* dashboard right */}
                <div className={`dashboard-header-right ${darkMode && "dark"}`}>
                    <div className="dashboard-header-right-icons">
                        <button
                            className={`${iconsClass} appears-1024px`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-header-icon-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        </button>
                        {/* darkmode */}
                        <button
                            onClick={() => setDarkMode(prev => !prev)}
                            className={iconsClass}>
                            <img src={!darkMode ? darkModeIcon : lightModeIcon} alt="dark mode icon" width={16} height={16} />
                        </button>
                        {/* notifications */}
                        <div className="dashboard-header-dropdown">
                            <button
                                ref={notificationsButtonRef}
                                onClick={() => toggleDropDown("notifications")}
                                className={iconsClass}>
                                <img src={notifications} alt="notifications icon" width={16} height={16} />
                            </button>
                            {dropDownState.notifications &&
                                <DropDownWrapper ignoreRef={notificationsButtonRef} onClose={() => setDropDownState(prev => ({
                                    ...prev,
                                    notifications: false
                                }))}>
                                    <NotificationDropDown />
                                </DropDownWrapper>
                            }
                        </div>
                        {/* switch accounts */}
                        <div className="dashboard-header-dropdown">
                            <button
                                ref={switchButtonRef}
                                onClick={() => toggleDropDown("switch")}
                                className={iconsClass}>
                                <img src={switchIcon} alt="icon" />
                            </button>
                            {dropDownState.switch &&
                                <DropDownWrapper ignoreRef={switchButtonRef} onClose={() => setDropDownState(prev => ({
                                    ...prev,
                                    switch: false
                                }))}>
                                    <SwitchDropDown />
                                </DropDownWrapper>
                            }
                        </div>
                    </div>
                    {/* profile dropdown */}
                    <div className="dashboard-header-dropdown">
                        <button
                            ref={profileButtonRef}
                            onClick={() => toggleDropDown("profile")}
                            className={`dashboard-header-right-profile ${darkMode && "dark"} ${language=="Eng" && "eng"}`}>
                            <div className="dashboard-header-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                            </div>
                            <span>{currFullname}</span>
                            <img className="dashboard-header-right-arrow" src={dropDownIcon} alt="dropdown" width={20} height={20} />
                        </button>
                        {dropDownState.profile &&
                            <DropDownWrapper ignoreRef={profileButtonRef} onClose={() => setDropDownState(prev => ({
                                ...prev,
                                profile: false
                            }))}>
                                <ProfileDropDown
                                    username={ProfileDropDownInfo[language].username}
                                    changeLang={ProfileDropDownInfo[language].changeLang}
                                    myProfile={ProfileDropDownInfo[language].myProfile}
                                    exit={ProfileDropDownInfo[language].exit}
                                />
                            </DropDownWrapper>
                        }
                    </div>
                    <div className="dashboard-header-burger">
                        <button
                            onClick={() => setSidebarOpen(prev => !prev)}
                            className="dashboard-header-burger-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-header-burger-menu-icon"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                        </button>
                        <DashboardBurgerMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    </div>
                </div>

            </header>
        </div>
    )
}