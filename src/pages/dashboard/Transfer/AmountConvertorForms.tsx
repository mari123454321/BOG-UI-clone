import BuySellItem from "../../../components/Dashboard/transactions/BuySellItem"
import { useLanguage } from "../../../context/LanguageContext"
import { currencySymbol, type Currency } from "../../../info/dashboard/MainPageInfo"

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type AmountConvertorProps = {
    sellCurrency: Currency
    buyCurrency: Currency
    exchangeRate: number | null

    sellAmountInput: number | ""; setSellAmountInput: SetState<number | "">;
    buyAmountInput: number | ""; setBuyAmountInput: SetState<number | "">;
}

export default function AmountConvertorForms({
    sellCurrency,
    buyCurrency,
    exchangeRate,
    sellAmountInput, setSellAmountInput,
    buyAmountInput, setBuyAmountInput
}: AmountConvertorProps) {
    const { language } = useLanguage()

    return (
        <div>
            <span className="account-selector-label title">
                {language === "Geo" ? "რამდენი" : "How Much"}
            </span>
            <div className="transactions-forms sell-buy-forms ">
                {/* sell form  */}
                <BuySellItem
                    placeholder={language === "Geo" ? "გასაყიდი" : "Sell"}
                    inputValue={sellAmountInput}
                    onChange={e => {
                        setBuySellState(
                            e.target.value,
                            setSellAmountInput,
                            exchangeRate || 0,
                            setBuyAmountInput
                        )
                    }}
                    currencySymbol={currencySymbol[sellCurrency]}
                />
                {/* buy form  */}
                <BuySellItem
                    placeholder={language === "Geo" ? "ყიდვა" : "Buy"}
                    inputValue={buyAmountInput}
                    onChange={e => {
                        setBuySellState(
                            e.target.value,
                            setBuyAmountInput,
                            1 / (exchangeRate || 0),
                            setSellAmountInput
                        )
                    }}
                    currencySymbol={currencySymbol[buyCurrency]}
                />
            </div>
        </div>
    )
}

const setBuySellState = (
    input: string,
    setAmount: (a: number | "") => void,
    rate: number,
    setConvertedAmount: (a: number | "") => void,
) => {
    const amount = input === '' ? '' : roundNumber(input);
    setAmount(amount)

    const convertedAmount = convertAmount(amount, rate)
    setConvertedAmount(convertedAmount)
}

export const convertAmount = (amount: string | number, rate: number) => {
    const amountExists = typeof amount === 'number' && amount > 0
    const rateExists = typeof rate === 'number' && rate > 0
    const canConvert = amountExists && rateExists

    return canConvert ? roundNumber(amount * rate) : ''
}

export const roundNumber = (numOrStr: number | string, digits: number = 2) =>
    Number(Number(numOrStr).toFixed(digits));
