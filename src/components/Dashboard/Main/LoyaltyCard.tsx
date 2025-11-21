import { useState } from "react"
import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { currencySymbol, loyaltyInfo } from "../../../info/dashboard/MainPageInfo.tsx"
import VisibilityIcon from "./VisibilityIcon"
import { useNavigate } from "react-router-dom"

export default function LoyaltyCard() {
    const navigate = useNavigate()
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const currentLanguage = loyaltyInfo[language]
    const [plusPointsVisible, setPlusPointsVisible] = useState(true)
    return (
        <section className="main-page-cards">
            <header className="main-page-cards-header loyalty">
                <h2 className={`main-page-cards-title ${darkMode ? "dark" : ""}`}>
                    {currentLanguage.title}
                </h2>
                <VisibilityIcon isVisible={plusPointsVisible} setIsVisible={setPlusPointsVisible} fill={true} />
            </header>
            <div
                onClick={()=>navigate("more/loyalty-programs")}
                className="loyalty-card-body">
                <img src="https://ibank.bog.ge/assets/images/bonus_programs/plus-v3.png" alt="plus points image" className="layalty-card-img" />
                <div className="loyalty-card-right">
                    <h3 className={`loyalty-card-title ${darkMode ? "dark" : ""}`}>
                        {currentLanguage.plusPoints}
                    </h3>
                    <span className={`loyalty-card-plus-points ${darkMode ? "dark" : ""} ${!plusPointsVisible && "hidden"}`}>
                        {plusPointsVisible ? loyaltyInfo.info.plusPoints : "●●●●"}
                    </span>
                    <div className={`loyalty-card-plus-points-in-curency ${darkMode ? "dark" : ""}`}>
                        <span className={`loyalty-card-amount ${!plusPointsVisible && "hidden"}`}>
                            {plusPointsVisible ? loyaltyInfo.info.plusPointsInLari : "●●●●"}
                        </span>
                        <span className={`loyalty-card-currency ${darkMode ? "dark" : ""}`}>{currencySymbol.lari}</span>
                    </div>
                </div>
            </div>

        </section>
    )
}