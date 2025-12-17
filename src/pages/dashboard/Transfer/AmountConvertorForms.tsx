import { useState } from "react"
import BuySellItem from "../../../components/Dashboard/transactions/BuySellItem"
import { useLanguage } from "../../../context/LanguageContext"
import { currencySymbol, type Currency } from "../../../info/dashboard/MainPageInfo"
import type { ChosenAccountType } from "./ToOwnAccount"

type AmountConvertorProps = {
    sellCurrency: Currency
    setSell: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    buyCurrency: Currency
    setBuy: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    exchangeRate: number | undefined
}


export default function AmountConvertorForms({ sellCurrency, setSell, buyCurrency, setBuy, exchangeRate }: AmountConvertorProps) {
    const { language } = useLanguage()
    const [sellAmountInput, setSellAmountInput] = useState<number | "">("")
    const [buyAmountInput, setBuyAmountInput] = useState<number | "">("")

    return (
        <div>
            <span className="account-selector-label title">
                {language === "Geo" ? "რამდენი" : "How Much"}
            </span>
            <div className="transactions-forms sell-buy-forms ">
                {/* sell form  */}
                <BuySellItem
                    placeholder={language === "Geo" ? "გასაყიდი" : "Sell"}
                    inputValue={sellAmountInput}
                    onChange={e => {
                        const newSellAmountInput = e.target.value === "" ? "" : Number(e.target.value);
                        setSellAmountInput(newSellAmountInput)
                        if (newSellAmountInput && exchangeRate){
                            const newBuyAmount = (newSellAmountInput * exchangeRate)
                            setBuyAmountInput(newBuyAmount)
                            setBuy(prev=>({...prev, amount: newBuyAmount}))
                        }

                    }}
                    currencySymbol={currencySymbol[sellCurrency]}
                />
                {/* buy form  */}
                <BuySellItem
                    placeholder={language === "Geo" ? "ყიდვა" : "Buy"}
                    inputValue={buyAmountInput}
                    onChange={e => {
                        const newBuyAmountInput = e.target.value === "" ? "" : Number(e.target.value);
                        setBuyAmountInput(newBuyAmountInput)
                        if (newBuyAmountInput && exchangeRate){
                            const newSellAmount = (newBuyAmountInput / exchangeRate)
                            setSellAmountInput(newSellAmount)
                            setSell(prev=>({...prev, amount: newSellAmount}))
                        
                        }
                    }}
                    currencySymbol={currencySymbol[buyCurrency]}
                />
            </div>
        </div>
    )
}       