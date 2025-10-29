import { useLanguage } from "../context/LanguageContext";
import LoginPageLayput from "../layouts/LoginPageLayout";

export default function LoginBusinessManager(){
    const {language} = useLanguage()
    const logoUrl:string = language == "Geo" ? "https://webstatic.bog.ge/boglogo/grey_business_manager_geo.svg" : "https://webstatic.bog.ge/boglogo/grey_business_manager_eng.svg"
    return(
        <div>
            <LoginPageLayput logoUrl= {logoUrl}/>
        </div>
    )
} 