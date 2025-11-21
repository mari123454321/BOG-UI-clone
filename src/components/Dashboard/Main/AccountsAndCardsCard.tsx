import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { accountsCardsInfo, currencySymbol, type Currency } from "../../../info/dashboard/MainPageInfo"
import cardimg from "../../../images/PINKCARD.png"
type AccountsAndCardsCardProps = {
    isCurrencyVisible: boolean
    currency: Currency
    amountNum: number
}
export default function AccountsAndCardsCard({ currency, isCurrencyVisible, amountNum }: AccountsAndCardsCardProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const currentLanguage = accountsCardsInfo[language]
    return (
        <section className="main-page-cards">
            <header className="main-page-cards-header accounts">
                <h2 className={`main-page-cards-title accounts ${darkMode ? "dark" : ""}`}>
                    {currentLanguage.title}
                </h2>
            </header>
            <table className="main-page-account-card-table">
                <tr className={`main-page-account-card-table-rows ${darkMode ? "dark" : ""}`}>
                    <td className={`main-page-account-card-table-titles ${darkMode ? "dark" : ""}`}>
                        {currentLanguage.name}
                    </td>
                    <td className={`main-page-account-card-table-titles ${darkMode ? "dark" : ""}`}>
                        {currentLanguage.currency}
                    </td>
                    <td className={`main-page-account-card-table-titles ${darkMode ? "dark" : ""}`}>
                        {currentLanguage.amount}
                    </td>
                </tr>
                <tr className="main-page-account-card-table-rows">
                    <td className="main-page-account-card-table-contents">
                        <img src={cardimg} alt="card image" style={{height: "24px"}} />
                        <span className={`main-page-account-card-table-subtitle ${darkMode ? "dark" : ""}`}>{currentLanguage.universalAccount}</span>
                    </td>
                    <td className="main-page-account-card-table-contents">
                        <span className={`main-page-account-card-currencies ${currency === "lari" && "active"}`}>{currencySymbol.lari}</span>
                        <span className={`main-page-account-card-currencies ${currency === "dollar" && "active"}`}>{currencySymbol.dollar}</span>
                        <span className={`main-page-account-card-currencies ${currency === "euro" && "active"}`}>{currencySymbol.euro}</span>
                        <span className={`main-page-account-card-currencies ${currency === "pound" && "active"}`}>{currencySymbol.pound}</span>
                    </td>
                    <td className="main-page-account-card-table-contents">
                        <div className="main-page-balance accounts-and-cards">
                            <span className={`main-page-balance-value-accounts-and-cards ${darkMode ? "dark" : ""} ${!isCurrencyVisible ? "hidden" : ""}`}>
                                {isCurrencyVisible ? amountNum : "●●●●"}
                            </span>
                            <span className={`main-page-balance-currency-accounts-and-cards ${darkMode ? "dark" : ""}`}>
                                {currencySymbol[currency]}
                            </span>
                        </div>
                    </td>
                </tr>
            </table>

        </section>
    )
}