import { useLanguage } from "../../context/LanguageContext"
import Option from "./Option"
import { infoBM } from "../../info"

export default function BusinessManagerCard() {
    const { language } = useLanguage()
    const info = infoBM[language]

    //render Options bellow passing above info as props
    return (
        <div className="cards-container">
            <h1 className="login-headers">{info.header}</h1>
            <Option title = {info.login.title} text= {info.login.text} icon={info.login.icon}/>
            <Option title = {info.register.title} text= {info.register.text} icon={info.register.icon}/>
        </div>
    )
}