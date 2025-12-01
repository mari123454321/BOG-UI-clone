import { Children, type ReactElement, type ReactNode } from "react"
import { useDarkMode } from "../../context/DarkModeContext"
import { currencySymbol, type Currency } from "../../info/dashboard/MainPageInfo"
import { useLanguage } from "../../context/LanguageContext"

type TransferPageCardLayoutProps = {
    children: ReactElement
    amount?: number
    currency?: string
    buttonText?: string
}
export default function TransferPageCardLayout({ children, amount, currency, buttonText }: TransferPageCardLayoutProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const defaultTransferText = language === "Geo" ? "გადარიცხვა" : "TRANSFER"
    return (
        <main className={`transfer-page-main ${darkMode ? "dark" : ""}`}>
            <section className="to-contacts-page-card">
                <div className="transfer-page-form-container">
                    {children}
                </div>
                <footer className={`transfer-page-footer ${darkMode ? "dark" : ""}`}>
                    <div className="transfer-page-footer-button-wrapper">
                        <button className="transfer-page-footer-button">
                            <span className="transfer-footer-button-text">
                                {buttonText ? buttonText : defaultTransferText}
                                (
                                {amount ? amount : "0.00"} {currency && currency}
                                )
                            </span>
                        </button>
                    </div>
                </footer>
            </section>
        </main>
    )
}