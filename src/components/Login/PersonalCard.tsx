import { useLanguage } from "../../context/LanguageContext"
import qr from "../../images/qr.png"
import PageDoesNotExist from "../../pages/PageDoesNotExist"
import { Link, useNavigate } from "react-router-dom"
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

const MyUsername = "mari"
const MyPassword = "mari123"

export default function PersonalCard() {
    const { language } = useLanguage()
    const currentLanguage = translations[language]
    const navigate = useNavigate()


    // function Login(formData: FormData) {
    //     const username = formData.get("username")
    //     const password = formData.get("password")
    //     MyUsername === username && MyPassword === password ? navigate("/PageDoesNotExist") : navigate("/PageDoesNotExist")
    // }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const username = (formData.get("username") as string).trim()
        const password = (formData.get("password") as string).trim()
        // doesnt let u submit just like in BOG website unless both forms are filled
        if (!username || !password) {
            return;
        }

        if (username === MyUsername && password === MyPassword) {
            navigate("/dashboard")
        } else {
            navigate("/PageDoesNotExist")
        }
    }
    return (
        <div className="card-container">
            <section className="auth-card">
                <div className="auth-card-title">
                    <h2 >{currentLanguage.title}</h2>
                </div>

                <div className="auth-card-form-container">
                    <form onSubmit={handleSubmit} >
                        <div className="auth-card-auth-methods">
                            <div className="auth-card-input-container">
                                <div className="auth-card-username">
                                    <input type="text" name="username" placeholder={currentLanguage.usernamePlaceholder}  className="login-input" />
                                    <label className="auth-save-username">
                                        <input type="checkbox" name="saveUsername" value={"save username"} className="checkbox" />
                                        {currentLanguage.saveUsername}
                                    </label>
                                </div>
                                <div className="auth-card-password">
                                    <input type="password" name="password" placeholder={currentLanguage.passwordPlaceholder}  className="login-input" />
                                    <Link to={"/PageDoesNotExist"}><span className="auth-forgot-password">{currentLanguage.fotgot}</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="auth-card-buttons">
                            <button className="button1" type="submit">{currentLanguage.button1}</button>
                            <button className="button2">{currentLanguage.button2}</button>

                        </div>

                    </form>
                </div>


            </section>
        </div>

    )
}