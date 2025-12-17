import { useState } from "react"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"
import AccountSelector from "../../../components/Dashboard/transactions/AccountSelector"
import { useLanguage } from "../../../context/LanguageContext"
import AmountConvertorForms from "./AmountConvertorForms"
import NominationForm from "./NominationForm"
import useGetRate from "../../../hooks/useGetRate"

export type ChosenAccountType = {
    defaultText?: string
    isChosenByDefault: boolean,
    accountID: number
    currency: Currency
    amount: number | null
}
export const currencyCodes: Record<Currency, string> = {
    lari: "GEL",
    dollar: "USD",
    euro: "EUR",
    pound: "GBP"
}

export default function ToOwnAccount() {
    const { language } = useLanguage()
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
    const [purposeMessage, setPurposeMessage] = useState<string>(language === "Geo" ? "კონვერტაცია" : "Conversion")

    const sellCurrency = currencyCodes[sell.currency]
    const buyCurrency = currencyCodes[buy.currency]
    const exchangeRate = useGetRate(sellCurrency, buyCurrency)


    return (
        <TransferPageCardLayout amount={9.99} currency={currencySymbol[currency]} >
            <div className="to-own-account-layout *:col-start-1">
                <AccountSelector label={language === "Geo" ? "საიდან" : "From"} AccountsInfo={myAccountsInfo} chosenAccount={sell} setChosenAccount={setSell} />
                <AccountSelector label={language === "Geo" ? "სად" : "Where"} AccountsInfo={myAccountsInfo} chosenAccount={buy} setChosenAccount={setBuy} btnToSkip={sell.currency} />
                <AmountConvertorForms sellCurrency={sell.currency} setSell={setSell} buyCurrency={buy.currency} setBuy={setBuy} exchangeRate={exchangeRate} />
                <NominationForm inputLabel={language === "Geo" ? "დანიშნულება" : "Nomination"} inputValue={purposeMessage} setInputValue={setPurposeMessage} />
            </div>
        </TransferPageCardLayout>
    )
}