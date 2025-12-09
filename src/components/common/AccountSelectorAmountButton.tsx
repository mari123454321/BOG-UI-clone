import { useDarkMode } from "../../context/DarkModeContext"
import type { Currency } from "../../info/dashboard/MainPageInfo"
type AccountSelectorAmountButtonProps = {
    amountProp?: number
    currencyProp: string
    isActive: boolean
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>
}
export default function AccountSelectorAmountButton({ amountProp, currencyProp, isActive, setCurrency }: AccountSelectorAmountButtonProps) {
    const { darkMode } = useDarkMode()
    return (
        <button
            onClick={() => setCurrency(currencyProp as Currency)}
            className={`account-selector-amounts ${isActive ? "active" : ""} ${!amountProp ? "currency-selector" : ''} ${darkMode ? "dark" : ""}`}>
            {amountProp && <span>{amountProp}</span>}
            <span>{currencyProp}</span>
        </button>
    )

}