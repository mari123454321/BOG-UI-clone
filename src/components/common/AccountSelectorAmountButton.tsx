import { useDarkMode } from "../../context/DarkModeContext"
import type { myAccountsInfoType } from "../../info/banking info/myAccountsInfo"
import type { Currency } from "../../info/dashboard/MainPageInfo"
import type { ChosenAccountType } from "../../pages/dashboard/Transfer/ToOwnAccount"
type AccountSelectorAmountButtonProps = {
    amountProp?: number
    currencySymbolProp: string
    currency: Currency
    isActive: boolean
    setChosenAccount: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    chosenAccount: ChosenAccountType
    account: myAccountsInfoType
}
export default function AccountSelectorAmountButton({ amountProp, currencySymbolProp, currency, isActive, setChosenAccount, chosenAccount, account }: AccountSelectorAmountButtonProps) {
    const { darkMode } = useDarkMode()
    return (
        <button
            onClick={(e) => {
                e.stopPropagation()
                setChosenAccount({...chosenAccount, currency: currency, accountID: account.id})}}
            className={`account-selector-amounts ${isActive ? "active" : ""} ${!amountProp ? "currency-selector" : ''} ${darkMode ? "dark" : ""}`}>
            {amountProp && <span>{amountProp}</span>}
            <span>{currencySymbolProp}</span>
        </button>
    )

}