import { ChevronDown, Star } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { currencyArray, type myAccountsInfoType } from "../../info/banking info/myAccountsInfo"
import { currencySymbol, type Currency } from "../../info/dashboard/MainPageInfo"
import { useLanguage } from "../../context/LanguageContext"
import AccountSelectorAmountButton from "./AccountSelectorAmountButton"
import { useState } from "react"
import type { ChosenAccountType } from "../../pages/dashboard/Transfer/ToOwnAccount"
type AccountSelectorItemProps = {
    accounts?: myAccountsInfoType[]
    account: myAccountsInfoType
    label?: string
    currency: Currency
    setChosenAccount?: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    chosenAccount: ChosenAccountType
    isDropdownDisabled?: boolean
    btnToSkip?: Currency

    onOpenDropdown?: () => void
    isDropdownOpen?: boolean
}

export default function AccountSelectorItem({ label, account, currency, setChosenAccount, isDropdownDisabled, chosenAccount, btnToSkip, isDropdownOpen, onOpenDropdown }: AccountSelectorItemProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()

    const isThisAccountSelected = chosenAccount.accountID === account.id
    return (
        <article className={`account-selector-item-body${darkMode ? "dark" : ""}`} >

            {label && <span className="account-selector-label text-(--text-primary)">
                {label}
            </span>}
            <div
                onClick={() => !isDropdownDisabled && onOpenDropdown?.()}
                className={`account-selector-body transactions-forms ${isDropdownOpen ? 'active' : ''} ${!isDropdownDisabled&&isThisAccountSelected?'outline-2 outline-offset-2 outline-orange-500':undefined}`}>
                <div
                    style={account.backgroundImg ? { backgroundImage: `url(${account.backgroundImg})` } : {}}
                    className="account-selector-background-img">
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
                                onClick={(e) => {
                                    e.stopPropagation();
                                    !isDropdownDisabled && onOpenDropdown?.()
                                }}
                                className={`account-selector-header-dropdown-button ${isDropdownOpen ? 'active' : ''} `}>
                                <ChevronDown className={`transition ${isDropdownOpen ? "rotate-180" : undefined}`} size={16} color="#5d4d45" />
                            </button>

                        </div>
                    </div>
                    {/* big currency buttons */}
                    <div className={`account-selector-amounts-wrapper ${isDropdownOpen ? 'active' : ''}`}>
                        {setChosenAccount && currencyArray.map((curr) => (
                            curr !== btnToSkip && <AccountSelectorAmountButton key={curr} account={account} amountProp={account.amounts[curr]} currencySymbolProp={currencySymbol[curr]} currency={curr} isActive={isThisAccountSelected&&(curr === currency)} setChosenAccount={setChosenAccount} chosenAccount={chosenAccount} />
                        ))}
                    </div>
                </div>
                <div className={`account-selector-footer ${isDropdownOpen ? 'active' : ''}`}>
                    <h3 className="account-selector-footer-text">{language === "Eng" ? "Select Currency" : "აირჩიე ვალუტა"}</h3>
                    {/* small currency buttons */}
                    <div className="account-selector-currencies-wrapper">
                        {setChosenAccount && currencyArray.map((curr) => (
                            curr !== btnToSkip && <AccountSelectorAmountButton key={curr} account={account} currencySymbolProp={currencySymbol[curr]} currency={curr} isActive={isThisAccountSelected&&(curr === currency)} setChosenAccount={setChosenAccount} chosenAccount={chosenAccount} />
                        ))}
                    </div>
                </div>
            </div>

        </article>
    )
}