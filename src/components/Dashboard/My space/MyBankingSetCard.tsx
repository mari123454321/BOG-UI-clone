import { useNavigate } from "react-router-dom"
import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"

export default function MyBankingSetCard() {
    const navigate = useNavigate()
    const { language } = useLanguage()
    const {darkMode}= useDarkMode()
    return (
        <section className="dashboard-cards">
            <div
                onClick={() => navigate("dashboard/more/banking-set")}
                className="banking-set-card-body">
                <img src="https://ibank.bog.ge/assets/images/rs-ge-logo.png" alt="banking set image" className="card-img" />
                <div className="card-right">
                    <h3 className={`card-title ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "შემოსავლების სამსახური" : "Revenue Service"}
                    </h3>
                    <p className={`card-text banking-set ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "დროულად მიიღებ ინფორმაციას დავალიანებაზე" : "You'll receive timely updates on debt information"}
                    </p>
                    <button className={`dashboard-cards-button ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "ჩართე წვდომა" : "Enable Access"}
                    </button>
                </div>
            </div>

        </section>
    )
}