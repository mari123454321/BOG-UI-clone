import SellBuy from "../../../components/Dashboard/transactions/SellBuy"
import { useLanguage } from "../../../context/LanguageContext"
import type { ChosenAccountType } from "./ToOwnAccount"

export type AmountConvertorProps = {
    sell: ChosenAccountType
    setSell: React.Dispatch<React.SetStateAction<ChosenAccountType>>
    buy: ChosenAccountType
    setBuy: React.Dispatch<React.SetStateAction<ChosenAccountType>>
}

export default function AmountConvertor({sell, setSell, buy, setBuy }:AmountConvertorProps) {
    const {language} = useLanguage()
    return (
        <div>
            <span className="account-selector-label title">
                {language === "Geo" ? "რამდენი" : "How Much"}
            </span>
            <SellBuy sell={sell} setSell={setSell} buy={buy} setBuy={setBuy}/>
        </div>
    )
}       