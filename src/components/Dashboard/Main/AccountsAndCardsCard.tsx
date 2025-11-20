import { useLanguage } from "../../../context/LanguageContext"
import { accountsCardsInfo } from "../../../info/dashboard/MainPageInfo"

export default function AccountsAndCardsCard() {
    const { language } = useLanguage()
    const translations = accountsCardsInfo[language]
    return (
        <section className="main-page-cards accounts">
            <header className="main-page-cards-header accounts">
                <h2 className="main-page-cards-title accounts">
                    {translations.title}
                </h2>
                <table className="main-page-account-card-table">
                    <tr>
                        <td>{translations.name}</td>
                        <td>{translations.currency}</td>
                        <td>{translations.amount}</td>
                    </tr>
                    <tr>
                        <td>{translations.name}</td>
                        <td>{translations.currency}</td>
                        <td>{translations.amount}</td>
                    </tr>
                </table>
            </header>
        </section>
    )
}