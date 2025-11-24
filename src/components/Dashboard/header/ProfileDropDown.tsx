import { Link } from "react-router-dom"
import type { Profile } from "../../../info/info"
import { useLoggedin } from "../../../context/LoggedinContext"
import { useLanguage } from "../../../context/LanguageContext"

export default function ProfileDropDown({ username, changeLang, myProfile, exit }: Profile) {
    const { setLoggedin } = useLoggedin()
    const { language, changeLanguage } = useLanguage()

    return (
        <div className="dashboard-header-pofile">
            <div className="dropdown-profile-content-wrapper">
                <div className="dropdown-profile-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="dropdown-profile-icons"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                </div>
                <span>{username}</span>
            </div>
            <div className="dropdown-profile-options-wrapper">
                {/* change language */}
                <div
                    className="dropdown-profile-options lang"
                    onClick={() => changeLanguage()}
                    style={{justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div className="dropdown-profile-icons-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="dropdown-profile-icons"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>
                        </div>
                        <span className="dropdown-profile-options-text lang">{changeLang}</span>
                    </div>

                    <span className="dropdown-profile-options-lang">
                        {language === "Geo" ? "Eng" : "Geo"}
                    </span>
                </div>
                {/* my profile */}
                <Link to="PageDoesNotExist">
                    <div className="dropdown-profile-options">
                        <div className="dropdown-profile-icons-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="dropdown-profile-icons"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        </div>
                        <span className="dropdown-profile-options-text">{myProfile}</span>
                    </div>
                </Link>
                {/* log out */}
                <Link to="/personal" >
                    <div onClick={() => setLoggedin(false)} className="dropdown-profile-options">
                        <div className="dropdown-profile-icons-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="dropdown-profile-icons"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                        </div>
                        <span className="dropdown-profile-options-text">{exit}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}