import { useState } from "react"
import SellBuy from "../../../components/Dashboard/transactions/SellBuyToBEDeleted"
import { useLanguage } from "../../../context/LanguageContext"
import { currencySymbol, type Currency } from "../../../info/dashboard/MainPageInfo"
import type { ChosenAccountType } from "./ToOwnAccount"
import BuySellItem from "../../../components/Dashboard/transactions/BuySellItem"
import useGetRate from "../../../hooks/useGetRate"

export type AmountConvertorProps = {
    sellCurrency: Currency
    setSell: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    buyCurrency: Currency
    setBuy: React.Dispatch<React.SetStateAction<ChosenAccountType>>
}

export default function AmountConvertorForms({ sellCurrency, setSell, buyCurrency, setBuy }: AmountConvertorProps) {
    const { language } = useLanguage()
    const [sellAmountInput, setSellAmountInput] = useState<number | null>(null)
    const [buyAmountInput, setBuyAmountInput] = useState<number | null>(null)
// useGetRate, get rate, write convertion logic,  update states
    const rate = useGetRate("USD", "GEL")
    return (
        <div>
            <span className="account-selector-label title">
                {language === "Geo" ? "რამდენი" : "How Much"}
            </span>
            <div className="transactions-forms sell-buy-forms ">
                {/* sell form  */}
                <BuySellItem placeholder={language === "Geo" ? "გასაყიდი" : "Sell"} setAmount={setSellAmountInput} currencySymbol={currencySymbol[sellCurrency]} />
                {/* buy form  */}
                <BuySellItem placeholder={language === "Geo" ? "ყიდვა" : "Buy"} setAmount={setBuyAmountInput} currencySymbol={currencySymbol[buyCurrency]} />
            </div>
        </div>
    )
}       