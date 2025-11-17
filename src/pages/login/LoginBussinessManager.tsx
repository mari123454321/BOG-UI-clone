import { useLanguage } from "../../context/LanguageContext";
import LoginPageLayput from "./LoginPageLayout";

export default function LoginBusinessManager(){
    const {language} = useLanguage()
    const logoTitle = language == "Geo" ? "ბიზნეს" : "BUSINESS"
    const logoText = language=="Geo" ? "მენეჯერი" : "MANAGER"
    return(
        <div>
            <LoginPageLayput logoTitle={logoTitle} logoText={logoText}/>
        </div>
    )
} 