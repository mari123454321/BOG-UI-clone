import { useLanguage } from "../../context/LanguageContext"
import { mainPageTop, type Currency } from "../../info/dashboard/MainPageInfo"
import MainTop from "../../components/Dashboard/Main/MainTop"
import { useState } from "react"
import AccountsAndCardsCard from "../../components/Dashboard/Main/AccountsAndCardsCard"
import LoyaltyCard from "../../components/Dashboard/Main/LoyaltyCard"
import MyTemplatesCard from "../../components/Dashboard/Main/MyTemplatesCard"
import ContactsCard from "../../components/Dashboard/Main/ContactsCard"
import TransactionsCard from "../../components/Dashboard/Main/TransactionsCard"
import PensionCard from "../../components/common/PensionCard"

export default function DashboardMain() {
    const {language} = useLanguage()
    const currentLanguage = mainPageTop[language]
    const [isCurrencyVisible, setIsCurrencyVisible] = useState(true) 
    const currency:Currency = "lari"

    return (
        <main className="">
            <MainTop mainPageTop = {mainPageTop} isCurrencyVisible={isCurrencyVisible} setIsCurrencyVisible={setIsCurrencyVisible} currency={currency} />
            <div className="cards-container main-page">
                <AccountsAndCardsCard currency={currency} isCurrencyVisible={isCurrencyVisible} amountNum = {currentLanguage.amount[currency]}/>
                <TransactionsCard />
                <MyTemplatesCard />
                <LoyaltyCard />
                <ContactsCard/>
                <PensionCard/>
            </div>
        </main>
    )

}