import { useLanguage } from "../context/LanguageContext"
import { useLocation } from "react-router-dom"
import { infoB } from "../info"
import { infoBM } from "../info"
import type {Options} from "../info"
import Option from "../components/Login/Option"


export default function BusinessCardLayout() {
    const currentLocation = useLocation().pathname
    const { language } = useLanguage()
    const info:Options = currentLocation == "/business" ? infoB[language] : infoBM[language]
    // render options using info contained in info
    // creates an array consisting of info's keys [header, login, register...].
    //Array<keyof typeof info> keyof takes keys of object type
    const keys = (Object.keys(info) as Array<keyof typeof info>);

    // const Options = keys.map(key => {
    //     <Option title={info[key].}  />
    // })



    return (
        <section className="businessCard-container">
            <h1>{info.header}</h1>

        </section>
    )
}