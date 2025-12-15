import { useLanguage } from "../../../context/LanguageContext";
import { currencySymbol } from "../../../info/dashboard/MainPageInfo";
import type { AmountConvertorProps } from "../../../pages/dashboard/Transfer/AmountConvertor";
import BuySellItem from "./BuySellItem";

export default function SellBuy(props: AmountConvertorProps) {
    const { language } = useLanguage()
    const sellCurrency = props.sell.currency
    const buyCurrency = props.buy.currency

    return (
        <div className="transactions-forms sell-buy-forms" >
            <BuySellItem placeholder={language === "Geo" ? "გასაყიდი" : "Sell"} setAmount={props.setSell} currencySymbol={currencySymbol[sellCurrency]}/>
            <BuySellItem placeholder={language === "Geo" ? "ყიდვა" : "Buy"} setAmount={ props.setBuy} currencySymbol={currencySymbol[buyCurrency]}/>
        </div>
    )
}