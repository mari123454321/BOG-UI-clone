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

type lang = "Geo" | "Eng"
// use context for lang type

export default function PersonalCard() {
    const { language } = useLanguage()
    const currentLanguage = translations[language]
    return (
        <div className="card-container">
            <section className="personal-card">
                <div className="personal-card-title">
                    <h2 >{currentLanguage.title}</h2>
                </div>

                <div className="personal-card-form-container">
                    <form>
                        <div className="personal-card-username">
                            <input type="text" name="username" placeholder={currentLanguage.usernamePlaceholder} required className="login-input" />
                            <label>
                                <input type="checkbox" name="saveUsername" value={"save username"} />
                                {currentLanguage.saveUsername}
                            </label>
                        </div>
                        <div className="personal-card-password">
                            <input type="password" name="password" placeholder={currentLanguage.passwordPlaceholder} required className="login-input" />
                            <a href="">{currentLanguage.fotgot}</a> {/*droebiti*/}
                        </div>
                        {/* <div className="personal-card-qr">
                            <img src={qr} alt="QR" />
                            <p>{currentLanguage.QRtext}</p>
                        </div> */}
                        <div className="personal-card-buttons">
                            <button className="button1">{currentLanguage.button1}</button>
                            <button className="button2">{currentLanguage.button2}</button>
                        
                        </div>
                        
                    </form>
                </div>


            </section>
        </div>

    )
}