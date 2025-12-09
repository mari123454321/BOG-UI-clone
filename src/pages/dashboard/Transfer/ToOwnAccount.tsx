import { useState } from "react"
import AccountSelectorItem from "../../../components/common/AccountSelectorItem"
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo"
import { type Currency, currencySymbol } from "../../../info/dashboard/MainPageInfo"
import AccountSelectorPopup from "../../../components/common/AccountSelectorPopup"

export default function ToOwnAccount() {
    const { darkMode } = useDarkMode()
    const [currency, setCurrency] = useState<Currency>("lari")
    // checks if dropdown is active
    console.log(currency)
    return (
        <TransferPageCardLayout amount={9.99} currency={currencySymbol[currency]} >
            <div className="to-own-account-layout">
                <div className="to-own-account-from-account-selector">
                    <AccountSelectorItem label="From" account={myAccountsInfo[0]} currency={currency} />
                    <AccountSelectorPopup>
                        {
                            myAccountsInfo.map((account) => (
                                <AccountSelectorItem label="From" account={account} currency={currency} setCurrency={setCurrency}/>
                            ))
                        }

                    </AccountSelectorPopup>
                </div>
            </div>
        </TransferPageCardLayout>
    )
}