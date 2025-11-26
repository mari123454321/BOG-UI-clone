import { BanknoteArrowUp, User } from "lucide-react"
import { useDarkMode } from "../../../context/DarkModeContext"
import type { BankAccount } from "../../../info/banking info/bankAccountsInfo"
import { useLanguage } from "../../../context/LanguageContext"

type ContactsItemProps = {
    contact: BankAccount
}
export default function ContactsItem({ contact }: ContactsItemProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    return (
        <article className={`contact-card ${darkMode && "dark"}`}>
            <div className="contact-card-left">
                <div className={`card-item-img`}>
                    {contact.pfp == null ?
                        <User className="icon-primary" /> :
                        <img src={contact.pfp} alt="" className="dashboard-cards-imgs" />
                    }
                </div>
                <div className="contact-info">
                    <h2 className="contact-name">{contact.name[language]}</h2>
                </div>
            </div>
            <button className="contact-card-right">
                <BanknoteArrowUp className="icon-primary"/>
            </button>

        </article>
    )
}