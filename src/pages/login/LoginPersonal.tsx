import { useLanguage } from "../../context/LanguageContext";
import LoginPageLayput from "./LoginPageLayout";


export default function LoginPersonal() {
    const { language } = useLanguage()
    const logoTitle = language == "Geo" ? "საქართველოს ბანკი" : "BANK OF GEORGIA"

    return (
        <LoginPageLayput logoTitle={logoTitle} />
    )
}