import { useDarkMode } from "../../context/DarkModeContext"
import { useLanguage } from "../../context/LanguageContext"

export default function PensionCard() {
    const { darkMode } = useDarkMode()
    const {language } = useLanguage()
    const illustrationrc = !darkMode ? "https://ibank.bog.ge/assets/images/pension-agency-logo-blue-new.svg" : "https://ibank.bog.ge/assets/images/pension-agency-logo-white-new.svg"
    return(
        <section className="dashboard-cards pension-card">
            <div className="pension-card-illustration-wrapper">
                <img src={illustrationrc} alt="pension illustration" className="pension-card-illustration"/>
            </div>
            <div className="pension-card-content">
                <h3 className={`dashboard-cards-title pension-card-content-upper ${darkMode ? "dark" : ""}`}>
                    {language === "Geo" ? "პენსია" : "PENSION"}
                </h3>
                <button className="dashboard-cards-button">
                    {language === "Geo" ? "გააქტიურება" : "ENABLE"}
                </button>
            </div>
        </section>
    )
}