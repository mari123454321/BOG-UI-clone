import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { myTemplatesInfo } from "../../../info/dashboard/MainPageInfo"
import TemplateCardItem from "./TemplateCardItem"

export default function MyTemplatesCard() {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const currentLanguage = myTemplatesInfo[language]
    return (
        <section className="main-page-cards">
            <header className="main-page-cards-header loyalty">
                <h2 className={`main-page-cards-title ${darkMode ? "dark" : ""}`}>
                    {currentLanguage.title}
                </h2>
            </header>
            <div className="my-templates-card-body">
                <TemplateCardItem img = {myTemplatesInfo.info[0].img} title = {myTemplatesInfo.info[0].templateTitle} typeOFTemplate={myTemplatesInfo.info[0].type} />
            </div>
        </section>
    )
}