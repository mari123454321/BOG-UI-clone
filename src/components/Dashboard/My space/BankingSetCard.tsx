import { useNavigate } from "react-router-dom"
import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"

export default function BankingSetCard() {
    const navigate = useNavigate()
    const { language } = useLanguage()
    const {darkMode}= useDarkMode()
    return (
        <section className="dashboard-cards">
            <div
                onClick={() => navigate("dashboard/more/banking-set")}
                className="banking-set-card-body">
                <img src="https://ibank.bog.ge/assets/images/package_logos/rb-logo.svg" alt="banking set image" className="card-img" />
                <div className="card-right">
                    <h3 className={`card-title banking-set ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "ჩემი საბანკო ნაკრები" : "My Banking Set"}
                    </h3>
                    <span className={`banking-set-badge ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "ნაკრების გარეშე" : "WITHOUT BANKING SET"}
                    </span>
                </div>
            </div>

        </section>
    )
}