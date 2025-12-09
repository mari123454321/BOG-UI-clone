import { ChevronDown, Star } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { currencyArray, type myAccountsInfoType } from "../../info/banking info/myAccountsInfo"
import { currencySymbol, type Currency } from "../../info/dashboard/MainPageInfo"
import { useLanguage } from "../../context/LanguageContext"
import AccountSelectorAmountButton from "./AccountSelectorAmountButton"
type AccountSelectorProps = {
    accounts?: myAccountsInfoType[]
    account: myAccountsInfoType
    label: string
    currency: Currency
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>
    isActive?: boolean
    handleClick?: () => void
}

export default function AccountSelector({ label, account, currency, setCurrency, isActive, handleClick }: AccountSelectorProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()

    return (
        <article className={` ${darkMode ? "dark" : ""}`} >

            {!isActive && <span className="account-selector-label">
                {label}
            </span>}
            <div className={`account-selector-body ${isActive ? 'active' : ''}`}>
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
                                className={`account-selector-header-dropdown-button ${isActive ? 'active' : ''} `}>
                                <ChevronDown size={16} color="#5d4d45" />
                            </button>

                        </div>
                    </div>
                    {isActive && <div className="account-selector-amounts-wrapper">
                        {currencyArray.map((curr) => (
                            <AccountSelectorAmountButton amountProp={account.amounts[curr]} currencyProp={currencySymbol[curr]} isActive={curr === currency} setCurrency={setCurrency}/>
                        ))}
                    </div>}
                </div>
                {isActive && <div className="account-selector-footer">
                    <h3 className="account-selector-footer-text">{language === "Eng" ? "Select Currency" : "აირჩიე ვალუტა"}</h3>
                    <div className="account-selector-currencies-wrapper">
                        {currencyArray.map((curr) => (
                            <AccountSelectorAmountButton currencyProp={currencySymbol[curr]} isActive={curr === currency} setCurrency={setCurrency}/>
                        ))}
                    </div>
                </div>}
            </div>

        </article>
    )
}