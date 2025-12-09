import { useState } from "react"
import AccountSelectorItem from "../../../components/common/AccountSelectorItem"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"

export default function ToOwnAccount() {
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")
    // checks if dropdown is active
    const [isDropdownActive, setisDropdownActive] = useState<boolean>(false)
    console.log(currency)
    return (
        <TransferPageCardLayout amount={9.99} currency = {currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <AccountSelectorItem label = "From" account={myAccountsInfo[0]} currency={currency} setCurrency={setCurrency} isDropdownActive= {isDropdownActive} handleClick={()=>setisDropdownActive(prev=>!prev)}/>
            </div>
        </TransferPageCardLayout>
)
}