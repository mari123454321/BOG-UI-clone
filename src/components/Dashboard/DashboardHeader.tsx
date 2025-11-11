import { useDarkMode } from "../../context/DarkModeContext"
import { useLanguage } from "../../context/LanguageContext"
import searchIcon from "../../icons/search.svg"
import darkModeIcon from "../../icons/dark_mode.svg"
import lightModeIcon from "../../icons/light_mode.svg"
import switchIcon from "../../icons/apps.svg"
import notifications from "../../icons/notifications.svg"
import personIcon from "../../icons/person.svg"
import dropDownIcon from "../../icons/arrow_drop_down.svg"
import { useState } from "react"
import DropDownWrapper from "./DropDownWrapper"
import NotificationDropDown from "./NotificationDropDown"
import ProfileDropDown from "./ProfileDropDown"
import SwitchDropDown from "./SwitchDropDown"

type DropDownKeys = "notifications" | "switch" | "profile"


type DashboardHeaderProps = {
    fullName: {
        Geo: string
        Eng: string
    }
}
export default function DashboardHeader({ fullName }: DashboardHeaderProps) {
    //current language context
    const { language, setLanguage } = useLanguage()
    // dark mode context
    const { darkMode, setDarkMode } = useDarkMode()
    //full naem in correct language
    const currFullname = fullName[language]

    const iconsClass = `dashboard-header-right-icon ${darkMode && "dark"}`

    //dropdown menu
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
    //removing dropdown if clicked outside 

    return (
        <div className={`dashboard-header-wrapper ${darkMode && "dark"}`}>
            <header className="dashboard-header">
                <div className="dashboard-header-left">
                    <img src="BOGlogo.png" />
                    <h2>{language === "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA"}</h2>
                </div>

                <div className={`dashboard-header-form-wrapper ${darkMode && "dark"}`}>
                    <form className="dashboard-header-form">
                        <img src={searchIcon} alt="search icon" width={16} height={16} />
                        <input className="dashboard-header-input" type="text" name="Search" placeholder="Search" />
                    </form>
                </div>

                <div className={`dashboard-header-right ${darkMode && "dark"}`}>
                    <div className="dashboard-header-right-icons">
                        <button
                            onClick={() => setDarkMode(prev => !prev)}
                            className={iconsClass}>
                            <img src={!darkMode ? darkModeIcon : lightModeIcon} alt="dark mode icon" width={16} height={16} />
                        </button>
                        <div className="dashboard-header-dropdown">
                            <button
                                onClick={() => toggleDropDown("notifications")}
                                className={iconsClass}>
                                <img src={notifications} alt="notifications icon" width={16} height={16} />
                            </button>
                            {dropDownState.notifications &&
                                <DropDownWrapper onClose={() => setDropDownState(prev => ({
                                    ...prev,
                                    notifications: false
                                }))}>
                                    <NotificationDropDown />
                                </DropDownWrapper>
                            }
                        </div>
                        <div className="dashboard-header-dropdown">
                            <button
                                onClick={() => toggleDropDown("switch")}
                                className={iconsClass}>
                                <img src={switchIcon} alt="icon" />
                            </button>
                            {dropDownState.switch &&
                                <DropDownWrapper onClose={() => setDropDownState(prev => ({
                                    ...prev,
                                    switch: false
                                }))}>
                                    <SwitchDropDown />
                                </DropDownWrapper>
                            }
                        </div>
                    </div>
                    <div className="dashboard-header-dropdown">
                        <button
                            onClick={() => toggleDropDown("profile")}
                            className={`dashboard-header-right-profile ${darkMode && "dark"}`}>
                            <div className="dashboard-header-icon-wrapper">
                                <img src={personIcon} alt="switch accounts icon" width={18} height={18} />
                            </div>
                            <span>{currFullname}</span>
                            <img className="dashboard-header-right-arrow" src={dropDownIcon} alt="dropdown" width={20} height={20} />
                        </button>
                        {dropDownState.profile &&
                            <DropDownWrapper onClose={() => setDropDownState(prev => ({
                                    ...prev,
                                    profile: false
                                }))}>
                                <ProfileDropDown />
                            </DropDownWrapper>
                        }
                    </div>
                </div>

            </header>
        </div>
    )
}