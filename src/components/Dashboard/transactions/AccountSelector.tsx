import { useState } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { useDarkMode } from "../../../context/DarkModeContext"
import AccountSelectorPopup from "../../common/AccountSelectorPopup"
import type { myAccountsInfoType } from "../../../info/banking info/myAccountsInfo"
import type { Currency } from "../../../info/dashboard/MainPageInfo"
import AccountSelectorItem from "../../common/AccountSelectorItem"
import type { ChosenAccountType } from "../../../pages/dashboard/Transfer/ToOwnAccount"

type AccountSelectorProps = {
    AccountsInfo: myAccountsInfoType[]
    label?: string
    chosenAccount: ChosenAccountType
    setChosenAccount?: React.Dispatch<React.SetStateAction<ChosenAccountType>>
}
export default function AccountSelector({ label, AccountsInfo, chosenAccount, setChosenAccount }: AccountSelectorProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    const id = chosenAccount.accountID !== null ? chosenAccount.accountID : 0
    return (
        <div className={`account-selector`}>
            <div onClickCapture={() => setIsPopupActive(true)}>
                <AccountSelectorItem label={label} account={AccountsInfo[id]} currency={chosenAccount.currency} isDropdownDisabled={true} chosenAccount={chosenAccount} />
            </div>
            <AccountSelectorPopup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive}>
                {
                    AccountsInfo.map((account) => (
                        <div onClick={()=>setChosenAccount && setChosenAccount({...chosenAccount, accountID: account.id})} key={account.id}>
                            <AccountSelectorItem account={account} currency={chosenAccount.currency} chosenAccount={chosenAccount} setChosenAccount={setChosenAccount} />
                        </div>
                    ))
                }

            </AccountSelectorPopup>
        </div>
    )
}