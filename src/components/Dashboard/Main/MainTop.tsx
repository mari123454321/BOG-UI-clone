import { Eye, EyeOff, LayoutDashboard } from "lucide-react"
import { useLanguage } from "../../../context/LanguageContext"
import { currencySymbol, type Currency, type MainPageTopType } from "../../../info/dashboard/MainPageInfo"
import { useDarkMode } from "../../../context/DarkModeContext"
import VisibilityIcon from "./VisibilityIcon"
type MainTopProps = {
    mainPageTop: MainPageTopType
    isCurrencyVisible: boolean
    setIsCurrencyVisible: React.Dispatch<React.SetStateAction<boolean>>
    currency: Currency
}
export default function MainTop({ mainPageTop, isCurrencyVisible, setIsCurrencyVisible, currency}: MainTopProps) {
    const { language } = useLanguage()
    const currentLanguage = mainPageTop[language]
    const {darkMode} = useDarkMode()

    return (

        <div className="main-page-top">
            <div className="main-page-top-left">
                <h1 className={`main-page-title-total-amount ${darkMode ? "dark" : ""}`}>{currentLanguage.title}</h1>
                <div className="main-page-balance-bottom">
                    <div className="main-page-balance">
                        <span className={`main-page-balance-value ${darkMode ? "dark" : ""} ${!isCurrencyVisible ? "hidden" : ""}`}>
                            {isCurrencyVisible ? currentLanguage.amount[currency] : "●●●●"}
                        </span>
                        <span className={`main-page-balance-currency ${darkMode ? "dark" : ""}`}>
                            {currencySymbol[currency]}
                        </span>
                    </div>
                    <VisibilityIcon isVisible={isCurrencyVisible} setIsVisible={setIsCurrencyVisible}/>
                </div>
            </div>
            <div className="main-page-top-right">
                <div className="dashboard-customization">
                    <LayoutDashboard width={16} height={16} fill="#ff5c0a" stroke="#ff5c0a"/> {/* this is giving me stroke */}
                    <span 
                        style={{color:"#ff5c0a"}}
                        className="dashboard-customization-title">
                        {currentLanguage.rearrangeSectionsTitle}
                    </span>
                </div>
            </div>

        </div>
    )

}