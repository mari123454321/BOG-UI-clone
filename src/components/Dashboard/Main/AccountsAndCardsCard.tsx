import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { accountsCardsInfo, currencySymbol, type Currency } from "../../../info/dashboard/MainPageInfo"

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
        <section className="main-page-cards accounts">
            <header className="main-page-cards-header accounts">
                <h2 className="main-page-cards-title accounts">
                    {currentLanguage.title}
                </h2>
            </header>
            <table className="main-page-account-card-table">
                <tr>
                    <td>{currentLanguage.name}</td>
                    <td>{currentLanguage.currency}</td>
                    <td>{currentLanguage.amount}</td>
                </tr>
                <tr>
                    <td>
                        <img src={currentLanguage.img} alt="card image" />
                        <span>{currentLanguage.universalAccount}</span>
                    </td>
                    <td>
                        <span className={`main-page-account-card-currencies ${currency === "lari" && "active"}`}>{currencySymbol.lari}</span>
                        <span className={`main-page-account-card-currencies ${currency === "dollar" && "active"}`}>{currencySymbol.dollar}</span>
                        <span className={`main-page-account-card-currencies ${currency === "euro" && "active"}`}>{currencySymbol.euro}</span>
                        <span className={`main-page-account-card-currencies ${currency === "pound" && "active"}`}>{currencySymbol.pound}</span>
                    </td>
                    <td>
                        <div className="main-page-balance accounts-and-cards">
                            <span className={`main-page-balance-value accounts-and-cards ${darkMode ? "dark" : ""} ${!isCurrencyVisible ? "hidden" : ""}`}>
                                {isCurrencyVisible ? amountNum : "●●●●"}
                            </span>
                            <span className={`main-page-balance-currency accounts-and-cards ${darkMode ? "dark" : ""}`}>
                                {currencySymbol[currency]}
                            </span>
                        </div>
                    </td>
                </tr>
            </table>

        </section>
    )
}