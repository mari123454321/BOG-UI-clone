import { useLanguage } from "../../context/LanguageContext"
import { mainPageTop, type Currency } from "../../info/dashboard/MainPageInfo"
import MainTop from "../../components/Dashboard/Main/MainTop"
import { useState } from "react"
import AccountsAndCardsCard from "../../components/Dashboard/Main/AccountsAndCardsCard"

export default function Main() {
    const {language} = useLanguage()
    const currentLanguage = mainPageTop[language]
    const [isCurrencyVisible, setIsCurrencyVisible] = useState(true) 
    const currency:Currency = "lari"

    return (
        <main className="">
            <MainTop mainPageTop = {mainPageTop} isCurrencyVisible={isCurrencyVisible} setIsCurrencyVisible={setIsCurrencyVisible} currency={currency} />
            <div className="main-page-cards-container">
                <AccountsAndCardsCard currency={currency} isCurrencyVisible={isCurrencyVisible} amountNum = {currentLanguage.amount[currency]}/>
            </div>
        </main>
    )

}