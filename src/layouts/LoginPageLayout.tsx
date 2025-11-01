import AuthHeader from "../components/Login/AuthHeader"
import { useLocation } from "react-router-dom";
import PersonalCard from "../components/Login/PersonalCard";
import BusinessCard from "../components/Login/BusinessCard";
import BusinessManagerCard from "../components/Login/BusinessManagerCard";
import type { JSX } from "react";
import AuthFooter from "../components/Login/AuthFooter";

type LoginPath = "/personal" | "/business" | "/manager"

const cards: Record<LoginPath, JSX.Element> = {
    "/personal": <PersonalCard />,
    "/business": <BusinessCard />,
    "/manager": <BusinessManagerCard />,
};

type Props = {
    logoTitle: string
    logoText?: string
}

export default function LoginPageLayput({ logoTitle, logoText }: Props) {
    const location = useLocation()
    const pathname = (location.pathname as LoginPath) ?? "/personal"
    const classNameLogo = pathname == "/personal" ? "auth-BOG-logo auth-BOG-personal-logo" : pathname == "/manager" ? "auth-BOG-logo auth-BOG-manager-logo" : "auth-BOG-logo auth-BOG-business-logo"
    return (
        <div className="login-personal">
            <div className="login-personal-left">
                <AuthHeader />
                <div className={classNameLogo}>
                    <img src="BOGlogo.png" alt="BOG logo" className="auth-BOGlogo" />
                    <div>
                        <h2>{logoTitle}</h2>
                        {logoText && <span>{logoText}</span>}
                    </div>
                </div>
                <main className="PersonalCardContainer">
                    {cards[pathname]}
                </main>
                <AuthFooter/>
            </div>
            <div className="login-personal-right">
                <img src="https://ramad.bog.ge/s3/sso/images/c90514a2-f523-44f0-9e70-11960cb75582.jpg" alt="მობაილ ბანკის გათამაშება" />
            </div>

        </div>
    )
}