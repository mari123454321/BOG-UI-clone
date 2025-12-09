import { Search } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { useLanguage } from "../../context/LanguageContext"

export default function AccountSelectorPopup({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()
    return (
        <div className="account-selector-popup-wrapper">
            <div className="account-selector-popup dashboard-cards">
                <div className={`ccount-selector-popup-header ${darkMode ? "dark" : ""}`}>
                    <h3 className="account-selector-popup-header-text dashboard-cards-title ">{language === "Geo" ? "აირჩიე ანგარიში" : "SELECT ACCOUNT"}</h3>
                    <div className="transfer-to-contacts-search-bar-wrapper account-selector-input-wrapper">
                        <Search className="transfer-to-contacts-search-icon" />
                        <input
                            name="noname"
                            className="transfer-to-contacts-search-input account-selector-input"
                            type="text"
                            placeholder={language === "Geo" ? "ძიება" : "Search"} />
                    </div>
                </div>
                <div className={`account-selector-popup-body ${darkMode ? "dark" : ""}`}>
                    {
                        children
                    }
                </div>
            </div>
            <div className="account-selector-popup-overlay"></div>
        </div>
    )
}