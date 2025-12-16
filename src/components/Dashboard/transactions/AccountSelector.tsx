import { useState } from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { useDarkMode } from "../../../context/DarkModeContext"
import AccountSelectorPopup from "../../common/AccountSelectorPopup"
import type { myAccountsInfoType } from "../../../info/banking info/myAccountsInfo"
import AccountSelectorItem from "../../common/AccountSelectorItem"
import type { ChosenAccountType } from "../../../pages/dashboard/Transfer/ToOwnAccount"
import type { Currency } from "../../../info/dashboard/MainPageInfo"

type AccountSelectorProps = {
    AccountsInfo: myAccountsInfoType[]
    label?: string
    chosenAccount: ChosenAccountType
    setChosenAccount?: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    btnToSkip?: Currency
    defaultText?: string

}
export default function AccountSelector({ label, AccountsInfo, chosenAccount, setChosenAccount, btnToSkip, defaultText }: AccountSelectorProps) {

    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    const id = chosenAccount.accountID
    return (
        <div className={`account-selector `}>
            <div onClickCapture={() => setIsPopupActive(true)}>
                <AccountSelectorItem label={label} account={AccountsInfo[id]} currency={chosenAccount.currency} isDropdownDisabled={true} chosenAccount={chosenAccount}  />
            </div>
            <AccountSelectorPopup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive}>
                {
                    AccountsInfo.map((account) => (
                        <div  key={account.id}>
                            <AccountSelectorItem account={account} currency={chosenAccount.currency} chosenAccount={chosenAccount} setChosenAccount={setChosenAccount} btnToSkip={btnToSkip} />
                        </div>
                    ))
                }

            </AccountSelectorPopup>
        </div>
    )
}