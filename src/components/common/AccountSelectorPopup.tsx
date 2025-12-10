import { Search } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { useLanguage } from "../../context/LanguageContext"
import X from "./X"
import { useEffect } from "react"

type AccountSelectorPopupProps = {
    children: React.ReactNode
    isPopupActive: boolean
    setIsPopupActive: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AccountSelectorPopup({ children, isPopupActive, setIsPopupActive }: AccountSelectorPopupProps) {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()
    useEffect(() => {
        if(!isPopupActive) return
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = prevOverflow;
        }
    }, [isPopupActive])

    return (
        <div className={`account-selector-popup-wrapper ${isPopupActive ? 'active' : ''}`}>
            <div className="account-selector-popup dashboard-cards">
                <div className={`ccount-selector-popup-header ${darkMode ? "dark" : ""}`}>
                    <div className="account-selector-back-btn">
                        <X size={16} dimentions="32px" handleClick={() => setIsPopupActive(false)} />
                    </div>
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
            <div
                onClick={() => setIsPopupActive(false)}
                className="account-selector-popup-overlay">

            </div>
        </div>
    )
}