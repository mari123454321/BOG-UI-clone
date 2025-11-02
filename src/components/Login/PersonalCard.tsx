import { useLanguage } from "../../context/LanguageContext"
import qr from "../../images/qr.png"
const translations = {
    Geo: {
        title: "ავტორიზაცია",
        usernamePlaceholder: "მომხმარებლის სახელი",
        saveUsername: "დამახსოვრება",
        passwordPlaceholder: "პაროლი",
        QRtext: "ავტორიზაციისთვის დაასკანერე QR მობილბანკიდან",
        fotgot: "დაგავიწყდათ მონაცემები?",
        button1: "შესვლა",
        button2: "რეგისტრაცია"
    },
    Eng: {
        title: "Authorization",
        usernamePlaceholder: "Username",
        saveUsername: "Save Username",
        passwordPlaceholder: "Password",
        QRtext: "Scan the QR code from Mobile Bank to log in",
        fotgot: "Forgot your Credentials?",
        button1: "LOG IN",
        button2: "REGISTER"
    }
}


export default function PersonalCard() {
    const { language } = useLanguage()
    const currentLanguage = translations[language]
    return (
        <div className="card-container">
            <section className="auth-card">
                <div className="auth-card-title">
                    <h2 >{currentLanguage.title}</h2>
                </div>

                <div className="auth-card-form-container">
                    <form>
                        <div className="auth-card-auth-methods">
                            <div className="auth-card-input-container">
                                <div className="auth-card-username">
                                    <input type="text" name="username" placeholder={currentLanguage.usernamePlaceholder} required className="login-input" />
                                    <label className="auth-save-username">
                                        <input type="checkbox" name="saveUsername" value={"save username"} className="checkbox" />
                                        {currentLanguage.saveUsername}
                                    </label>
                                </div>
                                <div className="auth-card-password">
                                    <input type="password" name="password" placeholder={currentLanguage.passwordPlaceholder} required className="login-input" />
                                    <a href=""><span  className="auth-forgot-password">{currentLanguage.fotgot}</span></a> {/*droebiti*/}
                                </div>
                            </div>
{/* 
                            <div className="auth-card-qr">
                                <img src={qr} alt="QR" />
                                <p>{currentLanguage.QRtext}</p>
                            </div> */}
                        </div>

                        <div className="auth-card-buttons">
                            <button className="button1">{currentLanguage.button1}</button>
                            <button className="button2">{currentLanguage.button2}</button>

                        </div>

                    </form>
                </div>


            </section>
        </div>

    )
}