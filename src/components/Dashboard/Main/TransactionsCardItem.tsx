import { EllipsisVertical } from "lucide-react"
import { useDarkMode } from "../../../context/DarkModeContext"
import type { Categories, CategoryKey, Transaction } from "../../../info/dashboard/transactions"

type TransactionsCardItemProps = {
    transactions: Transaction
    transactionIcon: Categories
}
export default function TransactionsCardItem({ transactions, transactionIcon }: TransactionsCardItemProps) {
    const { darkMode } = useDarkMode()
    const category: CategoryKey = transactions.category
    return (
        <div className={`transactions-card-item`}>
            <div className="transactions-card-item-left">
                <div className="transactions-card-item-icon">
                    {transactionIcon[category]}
                </div>
            </div>
            <div className="transactions-card-item-middle">
                <div className="transactions-card-item-details">
                    <div className={`transactions-card-item-date ${darkMode ? "dark" : ""}`}>
                        {transactions.date}
                    </div>
                    <div className={`transactions-card-item-description ${darkMode ? "dark" : ""}`}>
                        {transactions.description}
                    </div>
                    <div className={`transactions-card-item-type ${darkMode ? "dark" : ""}`}>
                        {transactions.type}
                    </div>
                </div>
            </div>
            <div className="transactions-card-item-right">
                <div className={`transactions-card-item-amount ${darkMode ? "dark" : ""} ${category === "Incomes" ? "income" : ""}`}>
                    {transactions.amount}{transactions.currency}
                </div>
                <button className={`transactions-card-item-more-info ${darkMode ? "dark" : ""}`}>
                    <EllipsisVertical width={16} height={16} className={`icon-secondary ${darkMode ? "dark" : ""}`} />
                </button>
            </div>
        </div>
    )
}