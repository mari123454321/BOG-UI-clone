import { useState } from "react"
import AccountSelector from "../../../components/common/AccountSelector"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"

export default function ToOwnAccount() {
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")
    const [isActive, setIsActive] = useState<boolean>(false)
    console.log(currency)
    return (
        <TransferPageCardLayout amount={9.99} currency = {currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <AccountSelector label = "From" account={myAccountsInfo[0]} currency={currency} setCurrency={setCurrency} isActive= {true}/>
            </div>
        </TransferPageCardLayout>
)
}