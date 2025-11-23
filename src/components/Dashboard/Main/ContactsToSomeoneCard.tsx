import { HandCoins } from "lucide-react"
import { useLanguage } from "../../../context/LanguageContext"
import TemplateCardItem from "./TemplateCardItem"
import { useNavigate } from "react-router-dom"

type ContactsToSomeoneCardProps = {
    
}
//make it so that when it navigates to payment page, mobile category is selected
export default function ContactsToSomeoneCard({  }:ContactsToSomeoneCardProps) {
    const {language} = useLanguage()
    const navigate = useNavigate()
    return (
        <TemplateCardItem
            navFunc={()=>navigate("/dashboard/transfer/contacts")}
            img={<HandCoins className="icon-primary"/>}
            title={language === "Geo" ? "სხვასთან გადარიცხვა" : "To Someone"}
        />
    )
}