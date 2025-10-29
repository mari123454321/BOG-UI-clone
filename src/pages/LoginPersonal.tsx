import { useLanguage } from "../context/LanguageContext";
import LoginPageLayput from "../layouts/LoginPageLayout";


export default function LoginPersonal() {
    const {language} = useLanguage()
    const logoUrl:string = language == "Geo"? "https://ibank.bog.ge/assets/segment-logos/rb/light/large_ka.svg" : "https://ibank.bog.ge/assets/segment-logos/rb/light/large_en.svg"
    return (
        <LoginPageLayput logoUrl = {logoUrl} />
    )
}