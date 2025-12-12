import { useState } from "react"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"
import AccountSelector from "../../../components/Dashboard/transactions/AccountSelector"
import { useLanguage } from "../../../context/LanguageContext"
import AmountConvertor from "./AmountConvertor"

export type ChosenAccountType = {
    defaultText?: string
    isChosenByDefault: boolean,
    accountID: number
    currency: Currency
    amount: number | null
}
export default function ToOwnAccount() {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")


    const [sell, setSell] = useState<ChosenAccountType>({
        isChosenByDefault: true,
        accountID: 0,
        currency: "lari",
        amount: null
    })
    const [buy, setBuy] = useState<ChosenAccountType>({
        isChosenByDefault: false,
        defaultText: language == "Geo" ? "ანგარიში" : "Account",
        accountID: 1,
        currency: "lari",
        amount: null
    })

    return (
        <TransferPageCardLayout amount={9.99} currency={currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <div className="from-account-selector-wrapper">
                    <AccountSelector label={language === "Geo" ? "საიდან" : "From"} AccountsInfo={myAccountsInfo} chosenAccount={sell} setChosenAccount={setSell} />
                </div>
                <div className="where-account-selector-wrapper">
                    <AccountSelector label={language === "Geo" ? "სად" : "Where"} AccountsInfo={myAccountsInfo} chosenAccount={buy} setChosenAccount={setBuy} btnToSkip={sell.currency} />
                </div>
                <div className="how-much-ammount-selector-wrapper">
                    <AmountConvertor sell={sell} setSell={setSell} buy={buy} setBuy={setBuy} />

                </div>
            </div>
        </TransferPageCardLayout>
    )
}