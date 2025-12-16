import { useLanguage } from "../../../context/LanguageContext";
import { currencySymbol } from "../../../info/dashboard/MainPageInfo";
import BuySellItem from "./BuySellItem";
import type { Currency } from "../../../info/dashboard/MainPageInfo"

type SellBuyProps = {
  sellAmountInput: number | null
  setSellAmountInput: React.Dispatch<React.SetStateAction<number | null>>
  buyAmountInput: number | null
  setBuyAmountInput: React.Dispatch<React.SetStateAction<number | null>>
  sellCurr: Currency
  buyCurr: Currency
}
export default function SellBuy(props: SellBuyProps) {
    const { language } = useLanguage()
    const sellCurrency = props.sellCurr
    const buyCurrency = props.buyCurr

    return (
        <div className="transactions-forms sell-buy-forms ">
            <BuySellItem placeholder={language === "Geo" ? "გასაყიდი" : "Sell"} setAmount={props.setSellAmountInput} currencySymbol={currencySymbol[sellCurrency]}/>
            <BuySellItem placeholder={language === "Geo" ? "ყიდვა" : "Buy"} setAmount={ props.setBuyAmountInput} currencySymbol={currencySymbol[buyCurrency]}/>
        </div>
    )
}