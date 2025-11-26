import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { myTemplatesInfo } from "../../../info/dashboard/MainPageInfo"
import TemplateCardItem from "./TemplateCardItem"
import type { JSX } from "react"
import ShowMoreCard from "./ShowMoreCard"
import MobilePaymentTemplateCard from "./MobilePaymentTemplateCard"
import { useNavigate } from "react-router-dom"

export default function MyTemplatesCard() {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const navigate = useNavigate()
    const currentLanguage = myTemplatesInfo[language]

    // different components to render based on number of templatesS
    const cardsToRender = ():JSX.Element => {
        if (myTemplatesInfo.info.length <= 3) {
            const templateCards = myTemplatesInfo.info.map((_, index) => (
                <TemplateCardItem
                    key={index}
                    img={myTemplatesInfo.info[index].img}
                    title={myTemplatesInfo.info[index].templateTitle}
                    subtext={myTemplatesInfo.info[index].type}
                />
            ))
            return (
                <div className="card-body">
                    {templateCards}
                    <MobilePaymentTemplateCard/>
                </div>
            )
        } else {
            const templateCards = myTemplatesInfo.info.slice(0, 2).map((_, index) => (
                <TemplateCardItem
                    key={index}
                    img={myTemplatesInfo.info[index].img}
                    title={myTemplatesInfo.info[index].templateTitle}
                    subtext={myTemplatesInfo.info[index].type}
                />
            ))
            return (
                <div className="card-body">
                    {templateCards}
                    <MobilePaymentTemplateCard/>
                    <ShowMoreCard infoLength={myTemplatesInfo.info.length-2} navFunc={()=>navigate("/dashboard/payment")} />
                </div>
            )
        }
    }
    return (
        <section className="dashboard-cards">
            <header className="dashboard-cards-header loyalty">
                <h2 className={`dashboard-cards-title ${darkMode ? "dark" : ""}`}>
                    {currentLanguage.title}
                </h2>
            </header>
            {cardsToRender()}
        </section>
    )
}