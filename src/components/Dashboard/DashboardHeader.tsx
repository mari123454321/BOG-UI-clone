import { useLanguage } from "../../context/LanguageContext"
import searchIcon from "../../icons/search.svg"
export default function DashboardHeader() {
    const { language, setLanguage } = useLanguage()
    return (
        <div className="dashboard-header-wrapper">
            <header className="dashboard-header">
                <div className="dashboard-header-left">
                    <img src="BOGlogo.png"/>
                    <h2>{ language === "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA" }</h2>
                </div>
                <div className="dashboard-header-form-wrapper">
                    <form className="dashboard-header-form">
                        <img src={searchIcon} width={16} height={16}/>
                        <input className="dashboard-header-input" type="text" name="Search" placeholder="Search"/>
                    </form>
                </div>
                <div className="dashboard-header-right">
                    stuff
                </div>
            </header>
        </div>
    )
}