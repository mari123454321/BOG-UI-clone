import { useLanguage } from "../../context/LanguageContext"
import Option from "./Option"
import { infoB } from "../../info"


export default function BusinessCard() {
    const { language } = useLanguage()
        const info = infoB[language]
    
    return (
        <div className="cards-container">
            <h1 className="login-header">{info.header}</h1>
            <Option title={info.login.title} text={info.login.text} icon={info.login.icon} />
            <Option title={info.register.title} text={info.register.text} icon={info.register.icon} />
            <Option title={info.open!.title} text={info.open!.text} icon={info.open!.icon} />

        </div>
    )
}