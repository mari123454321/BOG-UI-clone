import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"

export default function RevenueServiceCard() {
    const { language } = useLanguage()
    const {darkMode}= useDarkMode()
    return (
        <section className="dashboard-cards">
            <div
                onClick={() => console.log("Revenue Service Card Clicked, popup to be implemented") }
                className="revenue-service-card-body">
                <img src="https://ibank.bog.ge/assets/images/rs-ge-logo.png" alt="revenue service image" className="card-img" />
                <div className="card-right">
                    <h3 className={`card-title ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "შემოსავლების სამსახური" : "Revenue Service"}
                    </h3>
                    <p className={`card-text revenue-service ${darkMode ? "dark" : ""}`}>
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