import { useLanguage } from "../../context/LanguageContext"
import AuthOption from "./AuthOption"
import { infoBM } from "../../info"
import { useState } from "react"
import PersonalCard from "./PersonalCard"


export default function BusinessManagerCard() {
    const { language } = useLanguage()
    const info = infoBM[language]

    const [login, setLogin] = useState(false)
    function ToggleLogin(id: number) {
        if (id === 1) {
            setLogin(true)
        }
    }
    const AuthOptions = [
        <AuthOption key={info.login.id} title={info.login.title} text={info.login.text} icon={info.login.icon} id={info.login.id} ToggleLogin={ToggleLogin} />,
        <AuthOption key={info.register.id} title={info.register.title} text={info.register.text} icon={info.register.icon} id={info.register.id} ToggleLogin={ToggleLogin} />
    ]

    //render Options bellow passing above info as props
    return (
        <div className="cards-container">
            {!login && <h1 className="login-headers">{info.header}</h1>}
            {!login ? AuthOptions : <PersonalCard />}
        </div>
    )
}