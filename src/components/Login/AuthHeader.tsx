import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
const translations = {
  Geo: {
    personal: "ფიზიკური პირი",
    business: "ბიზნესი",
    manager: "ბიზნესის მენეჯერი",
    switchTo: "Eng",
  },
  Eng: {
    personal: "PHYSICAL PERSON",
    business: "BUSINESS",
    manager: "BUSINESS MANAGER",
    switchTo: "Geo",
  },
};
type lang = "Eng" | "Geo"

export default function AuthHeader(){
    // const [lang, setLang] = useState<lang>("Geo")
    const {language, setLanguage} = useLanguage()
    const t = translations[language]
    
    return(
        <header className="auth-header">
            <nav>
                <NavLink to={"/personal"} className={({isActive})=> isActive ? "active-link" : "link" }>{ t.personal}</NavLink>
                <NavLink to={"/business"} className={({isActive})=> isActive ? "active-link" : "link" }>{t.business}</NavLink>
                <NavLink to={"/manager"} className={({isActive})=> isActive ? "active-link" : "link" }>{t.manager}</NavLink>
            </nav>
            
            <button onClick={()=>
                setLanguage((prevLang)=>translations[prevLang].switchTo as lang) 
                }>
                {t.switchTo}
            </button>
        </header>
    )
}