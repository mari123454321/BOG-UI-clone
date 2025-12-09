import { ChevronDown, Star } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { currencyArray, type myAccountsInfoType } from "../../info/banking info/myAccountsInfo"
import { currencySymbol, type Currency } from "../../info/dashboard/MainPageInfo"
import { useLanguage } from "../../context/LanguageContext"
import AccountSelectorAmountButton from "./AccountSelectorAmountButton"
type AccountSelectorItemProps = {
    accounts?: myAccountsInfoType[]
    account: myAccountsInfoType
    label: string
    currency: Currency
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>
    isDropdownActive?: boolean
    handleClick?: () => void
}

export default function AccountSelectorItem({ label, account, currency, setCurrency, isDropdownActive, handleClick }: AccountSelectorItemProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()

    return (
        <article className={` ${darkMode ? "dark" : ""}`} >

            {!isDropdownActive && <span className="account-selector-label">
                {label}
            </span>}
            <div className={`account-selector-body ${isDropdownActive ? 'active' : ''}`}>
                <div className="account-selector-background-img">
                    <div className="account-selector-header">
                        <div className="account-selector-header-left">
                            <span className="account-selector-header-iban">
                                {account.iban}
                            </span>
                            <div className="account-selector-header-amount">
                                <span>
                                    {account.amounts[currency]}
                                </span>
                                <span>
                                    {currencySymbol[currency]}
                                </span>
                            </div>
                        </div>
                        <div className={`account-selector-header-right ${darkMode ? "dark" : ""}`}>
                            {account.isFavorite ?
                                <Star fill="#fc6719" stroke="#fc6719" size={16} /> :
                                <Star fill="#aaaaaaff" stroke="#aaaaaaff" size={16} />
                            }
                            <button
                                onClick={handleClick}
                                className={`account-selector-header-dropdown-button ${isDropdownActive ? 'active' : ''} `}>
                                <ChevronDown size={16} color="#5d4d45" />
                            </button>

                        </div>
                    </div>
                    <div className={`account-selector-amounts-wrapper ${isDropdownActive ? 'active' : ''}`}>
                        {currencyArray.map((curr) => (
                            <AccountSelectorAmountButton key={curr} amountProp={account.amounts[curr]} currencySymbolProp={currencySymbol[curr]} currency = {curr} isActive={curr === currency} setCurrency={setCurrency}/>
                        ))}
                    </div>
                </div>
                <div className={`account-selector-footer ${isDropdownActive ? 'active' : ''}`}>
                    <h3 className="account-selector-footer-text">{language === "Eng" ? "Select Currency" : "აირჩიე ვალუტა"}</h3>
                    <div className="account-selector-currencies-wrapper">
                        {currencyArray.map((curr) => (
                            <AccountSelectorAmountButton key={curr} currencySymbolProp={currencySymbol[curr]} currency = {curr} isActive={curr === currency} setCurrency={setCurrency}/>
                        ))}
                    </div>
                </div>
            </div>

        </article>
    )
}