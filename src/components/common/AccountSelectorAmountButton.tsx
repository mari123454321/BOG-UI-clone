import { useDarkMode } from "../../context/DarkModeContext"
import type { Currency } from "../../info/dashboard/MainPageInfo"
type AccountSelectorAmountButtonProps = {
    amountProp?: number
    currencySymbolProp: string
    currency: Currency
    isActive: boolean
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>
}
export default function AccountSelectorAmountButton({ amountProp, currencySymbolProp, currency, isActive, setCurrency }: AccountSelectorAmountButtonProps) {
    const { darkMode } = useDarkMode()
    return (
        <button
            onClick={() => setCurrency(currency)}
            className={`account-selector-amounts ${isActive ? "active" : ""} ${!amountProp ? "currency-selector" : ''} ${darkMode ? "dark" : ""}`}>
            {amountProp && <span>{amountProp}</span>}
            <span>{currencySymbolProp}</span>
        </button>
    )

}