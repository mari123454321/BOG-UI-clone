import { useLanguage } from "../../context/LanguageContext";
import LoginPageLayput from "./LoginPageLayout";

export default function LoginBusiness() {
    const { language } = useLanguage()
    const logoTitle = language == "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA"
    const logoText = language == "Geo" ? "ბიზნესი" : "BUSINESS"
    return (
        <div>
            <LoginPageLayput logoTitle={logoTitle} logoText={logoText} />
        </div>
    )
}