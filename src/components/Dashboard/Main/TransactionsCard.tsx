import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { useNavigate } from "react-router-dom"
import TransactionsCardItem from "./TransactionsCardItem"
import { categoryIcons, transactions } from "../../../info/dashboard/transactions"
import { ChevronRight } from "lucide-react"

export default function TransactionsCard() {
    const navigate = useNavigate()
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const transactionHistory = transactions[language]
    const transactionIcon = categoryIcons
    // onClick={()=>navigate("transactions")}
    return (
        <section className="dashboard-cards">
            <header className="dashboard-cards-header">
                <h2 className={`dashboard-cards-title ${darkMode ? "dark" : ""}`}>
                    {language === "Geo" ? "ბოლო ტრანზაქციები" : "LAST TRANSACTIONS"}
                </h2>
            </header> 
            <div className="transactions-card-body">
                {transactionHistory.map((transaction) => (
                    <TransactionsCardItem key={transaction.id} transactions={transaction} transactionIcon={transactionIcon} />
                ))}
            </div>
            <div className={`main-page-transactions-show-more-container`} >
                <button
                    onClick={() => navigate("/dashboard/transactions")}
                    className={`main-page-transactions-show-more-button ${darkMode ? "dark" : ""}`}>
                    <ChevronRight color="#ff6c1d" width={16} height={16}/>
                    <span className={`main-page-transactions-show-more-button-title ${language === "Eng" ? "eng": ""}`}>
                        {language === "Geo" ? "ყველას ნახვა" : "SHOW ALL"}
                    </span>
                </button>
            </div>

        </section>
    )
}