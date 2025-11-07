import { useDarkMode } from "../../context/DarkModeContext"
import { useLanguage } from "../../context/LanguageContext"
import searchIcon from "../../icons/search.svg"
import darkModeIcon from "../../icons/dark_mode.svg"
import lightModeIcon from "../../icons/light_mode.svg"
import nineDots from "../../icons/apps.svg"
import notifications from "../../icons/notifications.svg" 
import personIcon from "../../icons/person.svg"


type DashboardHeaderProps ={
    fullName: {
        Geo: string
        Eng: string
    }
}
export default function DashboardHeader({fullName}:DashboardHeaderProps) {
    const { language, setLanguage } = useLanguage()
    const {darkMode, setDarkMode} = useDarkMode()
    const currFullname = fullName[language]

    return (
        <div className={`dashboard-header-wrapper ${darkMode && "dark"}`}>
            <header className="dashboard-header">
                <div className="dashboard-header-left">
                    <img src="BOGlogo.png"/>
                    <h2>{ language === "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA" }</h2>
                </div>
                <div className={`dashboard-header-form-wrapper ${darkMode && "dark"}`}>
                    <form className="dashboard-header-form">
                        <img src={searchIcon} alt="search icon" width={16} height={16}/>
                        <input className="dashboard-header-input" type="text" name="Search" placeholder="Search"/>
                    </form>
                </div>
                <div className={`dashboard-header-right ${darkMode && "dark"}`}>
                    <div className="dashboard-header-right-icons">
                        <button className={`dashboard-header-right-icon ${darkMode && "dark"}`}>
                            <img src={!darkMode ? darkModeIcon : lightModeIcon} alt="dark mode icon" width={16} height={16}/>
                        </button>
                        <button className={`dashboard-header-right-icon ${darkMode && "dark"}`}>
                            <img src={notifications} alt="notifications icon" width={16} height={16}/>
                        </button>
                        <button className={`dashboard-header-right-icon ${darkMode && "dark"}`}>
                            <img src={nineDots} alt="icon" width={16} height={16}/>
                        </button>
                    </div>
                    <div className= {`dashboard-header-right-switch-accounts ${darkMode && "dark"}`}>
                        <img src={personIcon} alt="switch accounts icon" width={16} height={16}/>
                        <p>{currFullname}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}