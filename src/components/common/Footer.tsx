import facebook from "../../images/fbIcon.png"
import instagram from "../../images/instagramIcon.png"
import linkedIn from "../../images/linkedInIcon.png"
import youtube from "../../images/youtubeIcon.png"
import { footerInfo } from "../../info/info"
import { useLanguage } from "../../context/LanguageContext"

export default function Footer(){
    const currentLanguage = useLanguage().language
    const translatedInfo = footerInfo[currentLanguage]
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-top-text">
                    {translatedInfo.topText}
                </div>
                <div className="footer-quick-links-container">
                    <ul className="footer-quick-links">
                        <li><a href="https://conditions.bog.ge/ka/main" target="_blank" rel="noopener noreferrer">{translatedInfo.quickLinks.conditions}</a></li>
                        <li><a href="https://bankofgeorgia.ge/ka/official-message" target="_blank" rel="noopener noreferrer">{translatedInfo.quickLinks.messages}</a></li>
                        <li><a href="https://bankofgeorgia.ge/ka/anonymous-contact" target="_blank" rel="noopener noreferrer">{translatedInfo.quickLinks.hotLine}</a></li>
                        <li><a href="https://bankofgeorgia.ge/ka/security-center" target="_blank" rel="noopener noreferrer">{translatedInfo.quickLinks.securityCenter}</a></li>
                        <li><a href="https://bankofgeorgia.ge/ka/privacy-notice" target="_blank" rel="noopener noreferrer">{translatedInfo.quickLinks.privacyNotice}</a></li>
                    </ul>
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/BankOfGeorgia/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.youtube.com/user/BankofGeorgiaTV" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a>
                    <a href="https://www.instagram.com/bankofgeorgia/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.linkedin.com/company/bank-of-georgia" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
                </div>
                <div className="footer-download-links">
                    <a href="https://play.google.com/store/apps/details?id=ge.bog.mobilebank" target="_blank" rel="noopener noreferrer"><img src="https://ibank.bog.ge/assets/images/stores/google.svg" alt="PlayStore" /></a>
                    <a href="https://apps.apple.com/us/app/bank-of-georgia/id1159368231" target="_blank" rel="noopener noreferrer"><img src="https://ibank.bog.ge/assets/images/stores/apple.svg" alt="AppStore" /></a>
                </div>
            </div>
        </footer>
    )
}

// შესაძლებელია ul li-ის ცალკე კომპონენტსად გადატანა მაგრამ ამ პროექტში მეტჯერ არ გამოვიყენებ ამიტომ იყოს