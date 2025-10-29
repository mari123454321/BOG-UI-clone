import { useLanguage } from "../context/LanguageContext";
import LoginPageLayput from "../layouts/LoginPageLayout";

export default function LoginBusiness(){
    const {language} = useLanguage()
    const logoUrl:string =  language == "Geo" ? "https://bonline.bog.ge/images/logo/logo_ka.svg" : "https://bonline.bog.ge/images/logo/logo_en.svg"
    return(
        <div>
            <LoginPageLayput logoUrl={logoUrl} />
        </div>
    )
}