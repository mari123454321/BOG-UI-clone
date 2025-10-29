import AuthHeader from "../components/Login/AuthHeader"
import { useLocation } from "react-router-dom";
import PersonalCard from "../components/Login/PersonalCard";
import BusinessCard from "../components/Login/BusinessCard";
import BusinessManagerCard from "../components/Login/BusinessManagerCard";
import type { JSX } from "react";

type LoginPath = "/personal" | "/business" | "/manager"

const cards: Record<LoginPath, JSX.Element> = {
  "/personal": <PersonalCard />,
  "/business": <BusinessCard />,
  "/manager": <BusinessManagerCard />,
};

type Props = {
    logoUrl: string
}

export default function LoginPageLayput({logoUrl}:Props) {
    const location = useLocation()
    const pathname = location.pathname as LoginPath

    return (
        <div className="login-personal">
            <div className="login-personal-left">
                <AuthHeader />
                <div className={pathname == "/manager"? "auth-BOG-manager-logo" :"auth-BOG-logo"}>
                    <img src={logoUrl} alt="BOG logo" />
                </div>
                <main className="PersonalCardContainer">
                    {cards[pathname]}
                </main>
            </div>
            <div className="login-personal-right">
                <img src="https://ramad.bog.ge/s3/sso/images/c90514a2-f523-44f0-9e70-11960cb75582.jpg" alt="მობაილ ბანკის გათამაშება" />
            </div>

        </div>
    )
}