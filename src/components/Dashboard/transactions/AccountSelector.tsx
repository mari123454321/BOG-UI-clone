import { useState } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { useDarkMode } from "../../../context/DarkModeContext"
import AccountSelectorPopup from "../../common/AccountSelectorPopup"
import type { myAccountsInfoType } from "../../../info/banking info/myAccountsInfo"
import type { Currency } from "../../../info/dashboard/MainPageInfo"
import AccountSelectorItem from "../../common/AccountSelectorItem"

type AccountSelectorProps = {
    AccountsInfo: myAccountsInfoType[]
    label?: string
    currency: Currency
    setCurrency?: React.Dispatch<React.SetStateAction<Currency>>
}
export default function AccountSelector({ label, AccountsInfo, currency, setCurrency }: AccountSelectorProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    return (
        <div className={`account-selector ${label}`}>
            <div onClick={()=>setIsPopupActive(true)}>
                <AccountSelectorItem label={label} account={AccountsInfo[0]} currency={currency} isDropdownDisabled={true} />
            </div>
            <AccountSelectorPopup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive}>
                {
                    AccountsInfo.map((account) => (
                        <AccountSelectorItem label="From" account={account} currency={currency} setCurrency={setCurrency} />
                    ))
                }

            </AccountSelectorPopup>
        </div>
    )
}