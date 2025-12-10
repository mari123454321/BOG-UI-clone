import { useState } from "react"
import AccountSelectorItem from "../../../components/common/AccountSelectorItem"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"
import AccountSelectorPopup from "../../../components/common/AccountSelectorPopup"
import AccountSelector from "../../../components/Dashboard/transactions/AccountSelector"
import { useLanguage } from "../../../context/LanguageContext"

export default function ToOwnAccount() {
    const {language} = useLanguage()
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")
    return (
        <TransferPageCardLayout amount={9.99} currency={currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <AccountSelector label={language === "Geo" ? "საიდან" : "From"} AccountsInfo={myAccountsInfo} currency={currency} setCurrency={setCurrency}/>
                
            </div>
        </TransferPageCardLayout>
    )
}