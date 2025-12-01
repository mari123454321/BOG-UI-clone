import { ChevronDown, Star } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import type { myAccountsInfoType } from "../../info/banking info/myAccountsInfo"
import { currencySymbol, type Currency } from "../../info/dashboard/MainPageInfo"

type AccountSelectorProps = {
    accounts: myAccountsInfoType[]
    label: string
    currency: Currency
}

export default function AccountSelector({ label, accounts, currency }: AccountSelectorProps) {
    const { darkMode } = useDarkMode()
    const firstCard = accounts[0]
    return (
        <article className={` ${darkMode ? "dark" : ""}`} >

            <span className="account-selector-label">
                {label}
            </span>
            <div className="account-selector-body">
                <div className="account-selector-header">
                    <div className="account-selector-header-left">
                        <span className="account-selector-header-iban">
                            {firstCard.iban}
                        </span>
                        <div className="account-selector-header-amount">
                            <span>
                                {firstCard.amounts[currency]}
                            </span>
                            <span>
                                {currencySymbol[currency]}
                            </span>
                        </div>
                    </div>
                    <div className="account-selector-header-right">
                        {firstCard.isFavorite ?
                            <Star fill="#fc6719" stroke="#fc6719" size={16} /> :
                            <Star fill="#aaaaaaff" stroke="#aaaaaaff" size={16} />
                        }
                        <button className="account-selector-header-dropdown-button">
                            <ChevronDown size={16} color="#5d4d45" />
                        </button>

                    </div>
                </div>
            <div className="account-selector-amounts">
                
            </div>
                
                
            </div>

        </article>
    )
}