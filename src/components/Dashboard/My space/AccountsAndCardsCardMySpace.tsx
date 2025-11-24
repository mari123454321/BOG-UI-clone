import { useDarkMode } from "../../../context/DarkModeContext";
import { useLanguage } from "../../../context/LanguageContext";
import CardsAndAccountsRightImgDark from "../../../images/mySpaceCardsAndAccountsDark.png";
import CardsAndAccountsRightImgLight from "../../../images/mySpaceCardsAndAccountsLightDark.png";

type PropsType = {
    ammount: number
    currency: string;
}
export default function AccountsAndCardsCardMySpace({ ammount, currency }: PropsType) {
    const { language } = useLanguage()
    const { darkMode } = useDarkMode()


    return (
        <section className="dashboard-cards accounts-and-cards-card-my-space">
            <div className="accounts-and-cards-card-my-space-body">
                <div className="accounts-and-cards-card-my-space-left">
                    <h2 className={`dashboard-cards-title ${darkMode ? "dark" : ""}`}>
                        {language === "Geo" ? "ანგარიშები და ბარათები" : "ACCOUNTS AND CARDS"}
                    </h2>
                    <div className="accounts-and-cards-card-my-space-amount">
                        <span className={`accounts-and-cards-card-my-space-amount-num ${darkMode ? "dark" : ""}`}>
                            {ammount}
                        </span>
                        <span className={`accounts-and-cards-card-my-space-amount-currency ${darkMode ? "dark" : ""}`}>
                            {currency}
                        </span>
                    </div>
                    <img src="https://ibank.bog.ge/assets/images/cards/backgrounds/card_gradient_shekvetili/4.png" alt="card image" className="my-space-card-img" />
                </div>
                <div className="accounts-and-cards-card-my-space-right">
                    <img src={darkMode ? CardsAndAccountsRightImgDark : CardsAndAccountsRightImgLight} alt="card image" />
                </div>

            </div>
        </section>
    )
}