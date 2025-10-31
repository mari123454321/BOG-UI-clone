import { useLanguage } from "../../context/LanguageContext"
import Option from "./Option"
import businessManagerEnterIcon from "../../images/businessManagerEnterIcon.png"
import businessManagerRegisterIcon from "../../images/businessManagerRegisterIcon.png"

//type this

const translations = {
    Geo: {
        login: {
            title: "ბიზნეს მენეჯერში შესვლა",
            text: "შეიყვანეთ, ან აღადგინეთ თქვენი ბიზნეს ინტერნეტბანკის მომხმარებლის სახელი და პაროლი",
            icon: businessManagerEnterIcon,
        },
        register: {
            title: "ბიზნეს მენეჯერში რეგისტრაცია",
            text: "თუ ჯერ არ ხართ საქართველოს ბანკის ბიზნეს მომხმარებელი, შეგიძლიათ მომენტალურად გახსნათ ანგარიში",
            icon: businessManagerRegisterIcon,
        }

    },
    Eng: {
        login: {
            title: "Enter the Business Manager",
            text: "Enter or restore your Business Internet Banking login and password",
            icon: businessManagerEnterIcon,
        },
        register: {
            title: "Registration in the Business Manager",
            text: "If you are not already a Bank of Georgia business customer, you can instantly open an account",
            icon: businessManagerRegisterIcon,
        }
    }
}



export default function BusinessManagerCard() {
    const { language } = useLanguage()
    const currentLanguage = translations[language]

    //render Options bellow passing above info as props
    return (
        <div className="cards-container">
            <h1>მართეთ ბიზნესი ერთი სივრციდან</h1>
            <Option title = {currentLanguage.login.title} text= {currentLanguage.login.text} icon={currentLanguage.login.icon}/>
            <Option title = {currentLanguage.register.title} text= {currentLanguage.register.text} icon={currentLanguage.register.icon}/>
        </div>
    )
}