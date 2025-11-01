import { useLanguage } from "../../context/LanguageContext"
import AuthOption from "./AuthOption"
import { infoB } from "../../info"
import PersonalCard from "./PersonalCard"
import { useState } from "react"

export default function BusinessCard() {
    const { language } = useLanguage()
    const info = infoB[language]
    const [login, setLogin] = useState(false)
    
    function ToggleLogin(id: number) {
        if (id === 1) {
            setLogin(true)
        }
    }

    const AuthOptions = [
        <AuthOption key={info.login.id} title={info.login.title} text={info.login.text} icon={info.login.icon} id={info.login.id} ToggleLogin={ToggleLogin} />,
        <AuthOption key={info.register.id} title={info.register.title} text={info.register.text} icon={info.register.icon} id={info.register.id} ToggleLogin={ToggleLogin} />,
        <AuthOption key={info.open!.id}title={info.open!.title} text={info.open!.text} icon={info.open!.icon} id={info.open!.id} ToggleLogin={ToggleLogin} />

    ]

    return (
        <div className="cards-container">
            {!login && <h1 className="login-header">{info.header}</h1>}
            {!login ? AuthOptions : <PersonalCard/>}

        </div>
    )
}