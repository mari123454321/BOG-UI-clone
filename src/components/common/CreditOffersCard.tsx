import { SquarePen } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useDarkMode } from "../../context/DarkModeContext";

const infoTextGeo = 'საკრედიტო შეთავაზებების ჩართვით, თანხმობას მოგვცემ სს "კრედიტინფო საქართველოს" ბაზაში ინფორმაციის გადამოწმებაზე, რაც დაგვეხმარება შენზე მორგებული საბანკო პროდუქტების შემოთავაზებაში.'
const infoTextEng = 'By activating credit offers, you will allow us to check your information in the database of JSC "Creditinfo Georgia". It will help us to offer you customized banking products.'

export default function CreditOffersCard() {
    const {language} = useLanguage()
    const {darkMode} = useDarkMode()
    return (
        <section className="dashboard-cards">
            <div className="credit-offers-card-body">
                <div className="credit-offer-card-icon">
                    <SquarePen className="icon-primary" size={24} />
                </div>
                <div className="credit-offers-card-bottom">
                    <h3 className={`card-title credit-offers ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "საკრედიტო შეთავაზებები" : "Credit Offers"}
                        <span className={`credit-offers-badge ${darkMode ? "dark" : ""}`}>
                            {language === "Geo" ? "გამორთული" : "Deactivated"}
                        </span>
                    </h3>
                    <p className={`credit-offers-info-text ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? infoTextGeo : infoTextEng}
                    </p>
                    <button className={`dashboard-cards-button credit-offers-card-button ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "ჩართვა" : "Activate"}
                    </button>
                </div>
            </div>

        </section>
    )
}