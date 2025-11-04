import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
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

export default function AuthHeader() {
  // const [lang, setLang] = useState<lang>("Geo")
  const { language, setLanguage } = useLanguage()
  const currentLanguage = translations[language]
  const [isShown, setIsShown] = useState<boolean>(false)
  return (
    <>
      <header className="auth-header">
        <div className="burger">
          <Hamburger toggled={isShown} toggle={setIsShown} size={16}/>
        </div>
        <nav className="auth-navigation">
          <NavLink to={"/personal"} className={({ isActive }) => isActive ? "active-link" : "link"}>{currentLanguage.personal}</NavLink>
          <NavLink to={"/business"} className={({ isActive }) => isActive ? "active-link" : "link"}>{currentLanguage.business}</NavLink>
          <NavLink to={"/manager"} className={({ isActive }) => isActive ? "active-link" : "link"}>{currentLanguage.manager}</NavLink>
        </nav>

        <button onClick={() =>
          setLanguage((prevLang) => translations[prevLang].switchTo as lang)
        }>
          {currentLanguage.switchTo}
        </button>
      </header>
      <div
        className={`sidebar-overlay ${isShown ? "active" : ""}`}
        onClick={() => setIsShown(false)}
      ></div>
      <nav className={`auth-sidebar ${isShown ? "active" : ""}`}>
        <div className="sidebar-links">
          <div className="burger">
            <Hamburger toggled={isShown} toggle={setIsShown} size={16}/>
          </div>
          <NavLink to={"/personal"} className={({ isActive }) => isActive ? "sidebar-active-link" : "sidebar-link"}>{currentLanguage.personal}</NavLink>
          <NavLink to={"/business"} className={({ isActive }) => isActive ? "sidebar-active-link" : "sidebar-link"}>{currentLanguage.business}</NavLink>
          <NavLink to={"/manager"} className={({ isActive }) => isActive ? "sidebar-active-link" : "sidebar-link"}>{currentLanguage.manager}</NavLink>
        </div>
      </nav>

    </>

  )
}