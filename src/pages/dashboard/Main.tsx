import { useLanguage } from "../../context/LanguageContext"
import { mainPageTop } from "../../info/dashboard/MainPageInfo"
import MainTop from "../../components/Dashboard/Main/MainTop"
import { useState } from "react"

export default function Main() {
    const {language} = useLanguage()
    const currentLanguage = mainPageTop[language]
    const [isCurrencyVisible, setIsCurrencyVisible] = useState(true) 

    return (
        <main className="">
            <MainTop mainPageTop = {mainPageTop} isCurrencyVisible={isCurrencyVisible} setIsCurrencyVisible={setIsCurrencyVisible} currency="lari" />
            <div className="main-page-cards-container">
                
            </div>
        </main>
    )

}