import { useLanguage } from "../../../context/LanguageContext";
import { currencySymbol } from "../../../info/dashboard/MainPageInfo";
import type { AmountConvertorProps } from "../../../pages/dashboard/Transfer/AmountConvertor";

export default function SellBuy(props: AmountConvertorProps) {
    const { language } = useLanguage()
    const sellCurrency = props.sell.currency

    return (
        <div className="transactions-forms sell-buy-forms">
            <div className="transactions-form sell-buy-form">
                <input
                    type="text"
                    className="sell-buy-input"
                    placeholder={language === "Geo" ? "გასაყიდი" : "Sell"}
                    onChange={(e) => props.setSell(prev => ({
                        ...prev,
                        amount: Number(e.target.value),
                    }))} />
                    <div>
                        {currencySymbol[sellCurrency]}
                    </div>
            </div>
             <div className="transactions-form sell-buy-form">
                <input
                    type="text"
                    className="sell-buy-input"
                    placeholder={language === "Geo" ? "გასაყიდი" : "Buy"}
                    onChange={(e) => props.setSell(prev => ({
                        ...prev,
                        amount: Number(e.target.value),
                    }))} />
                    <div>
                        {currencySymbol[sellCurrency]}
                    </div>
            </div>
        </div>
    )
}