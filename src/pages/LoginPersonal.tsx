import AuthHeader from "../components/Login/AuthHeader";
import PersonalCard from "../components/Login/PersonalCard"

export default function LoginPersonal() {
    return (
        <div className="login-personal">
            <div className="login-personal-left">
                <AuthHeader />
                <div className="auth-BOG-logo">
                    <img src="https://ibank.bog.ge/assets/segment-logos/rb/light/large_ka.svg" alt="BOG logo" />
                </div>
                <main className="PersonalCardContainer">
                    <PersonalCard />
                </main>
            </div>
            <div className="login-personal-right">
                <img src="https://ramad.bog.ge/s3/sso/images/c90514a2-f523-44f0-9e70-11960cb75582.jpg" alt="მობაილ ბანკის გათამაშება" />
            </div>
            
        </div>

    )
}