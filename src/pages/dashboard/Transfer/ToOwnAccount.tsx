import { useState } from "react"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"
import AccountSelector from "../../../components/Dashboard/transactions/AccountSelector"
import { useLanguage } from "../../../context/LanguageContext"

export type ChosenAccountType = {
    accountID: number | null
    currency: Currency
}
export default function ToOwnAccount() {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")

    const [from, setFrom] = useState<ChosenAccountType>({
        accountID: 0,
        currency: "lari"
    })
    const [where, setWhere] = useState<ChosenAccountType>({
        accountID: 1,
        currency: "lari"
    })
    return (
        <TransferPageCardLayout amount={9.99} currency={currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <div className="from-account-selector-wrapper">
                    <AccountSelector label={language === "Geo" ? "საიდან" : "From"} AccountsInfo={myAccountsInfo} chosenAccount={from} setChosenAccount={setFrom} />
                </div>
                <div className="where-account-selector-wrapper">
                    <AccountSelector label={language === "Geo" ? "სად" : "Where"} AccountsInfo={myAccountsInfo} chosenAccount={where} setChosenAccount={setWhere}/>
                </div>
            </div>
        </TransferPageCardLayout>
    )
}