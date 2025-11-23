import { useLanguage } from "../../../context/LanguageContext"
import TemplateCardItem from "./TemplateCardItem"

type ShowMoreCardProps = {
    infoLength: number
    navFunc: ()=> void
}
export default function ShowMoreCard({ infoLength, navFunc }:ShowMoreCardProps) {
    const {language} = useLanguage()
    return (
        <TemplateCardItem
            navFunc={navFunc}
            img={<span className="show-more-num">+{infoLength}</span>}
            title={language === "Geo" ? "მეტის ნახვა" : "Show More"}
        />
    )
}