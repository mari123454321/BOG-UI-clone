import { TabletSmartphone } from "lucide-react"
import { useLanguage } from "../../../context/LanguageContext"
import TemplateCardItem from "./TemplateCardItem"
import { useDarkMode } from "../../../context/DarkModeContext"
import { useNavigate } from "react-router-dom"

type MobilePaymentTemplateCardProps = {
    
}
//make it so that when it navigates to payment page, mobile category is selected
export default function MobilePaymentTemplateCard({  }:MobilePaymentTemplateCardProps) {
    const {language} = useLanguage()
    const { darkMode } = useDarkMode()
    const navigate = useNavigate()
    return (
        <TemplateCardItem
            navFunc={()=>navigate("/dashboard/payment")}
            img={<TabletSmartphone color={darkMode ?  "white" : "black"}/>}
            title={language === "Geo" ? "მობილურზე ჩარიცხვა" : "Mobile Payment"}
        />
    )
}