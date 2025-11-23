import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { myTemplatesInfo } from "../../../info/dashboard/MainPageInfo"
import TemplateCardItem from "./TemplateCardItem"
import type { JSX } from "react"
import ShowMoreCard from "./ShowMoreCard"
import { useNavigate } from "react-router-dom"
import { contacts } from "../../../info/dashboard/contacts"
import { User } from "lucide-react"
import ContactsToSomeoneCard from "./ContactsToSomeoneCard"

export default function ContactsCard() {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    const navigate = useNavigate()

    // different components to render based on number of contacts
    const cardsToRender = ():JSX.Element => {
        if (myTemplatesInfo.info.length <= 3) {
            const contactsCards = myTemplatesInfo.info.map((_, index) => (
                <TemplateCardItem
                    img={contacts[index].pfp ? contacts[index].pfp : <User className="icon-primary"/>}
                    title={contacts[index].name}
                />
            ))
            return (
                <div className="card-body">
                    {contactsCards}
                    <ContactsToSomeoneCard/>
                </div>
            )
        } else {
            const contactsCards = myTemplatesInfo.info.slice(0, 2).map((_, index) => (
                <TemplateCardItem
                    img={contacts[index].pfp ? contacts[index].pfp : <User className="icon-primary"/>}
                    title={contacts[index].name}
                />
            ))
            return (
                <div className="card-body">
                    {contactsCards}
                    <ContactsToSomeoneCard/>
                    <ShowMoreCard infoLength={myTemplatesInfo.info.length-2} navFunc={()=>navigate("/dashboard/transfer/contacts")} />
                </div>
            )
        }
    }
    return (
        <section className="main-page-cards">
            <header className="main-page-cards-header loyalty">
                <h2 className={`main-page-cards-title ${darkMode ? "dark" : ""}`}>
                    {language === "Geo" ? "კონტაქტები" : "CONTACTS"}
                </h2>
            </header>
            {cardsToRender()}
        </section>
    )
}