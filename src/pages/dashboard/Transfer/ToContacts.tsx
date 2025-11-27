import { Search } from "lucide-react";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useLanguage } from "../../../context/LanguageContext";
import ShowAllButton from "../../../components/common/ShowAllButton";
import { bankAccounts } from "../../../info/banking info/bankAccountsInfo";
import { useState } from "react";
import ContactsItem from "../../../components/Dashboard/transactions/ContactsItem";
import useDebounce from "../../../hooks/useDebounce";
export default function ToContacts() {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()

    const [isShortened, setIsShortened] = useState(true);
    const [inputText, setInputText] = useState("")
    const unfilteredContacts = isShortened ? bankAccounts.slice(0, 21) : bankAccounts;
    const filteredContacts = bankAccounts.filter((contact) => contact.name[language].toLowerCase().includes(inputText))
    const contactsToRender = inputText === "" ? unfilteredContacts : filteredContacts
    return (
        <main className="transfer-page-main">
            <section className={`to-contacts-page-card ${darkMode ? "dark" : ""}`}>
                <header className={`transfer-to-contacts-header ${darkMode ? "dark" : ""}`}>
                    <h1>
                        {language === "Geo" ? "კონტაქტები" : "CONTACTS"}
                    </h1>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="transfer-to-contacts-search-form">
                        <div className="transfer-to-contacts-search-bar-wrapper">
                            <Search className="transfer-to-contacts-search-icon" />
                            <input
                                onChange={(e) => setInputText(e.target.value)}
                                className="transfer-to-contacts-search-input"
                                type="text"
                                placeholder={language === "Geo" ? "ძიება" : "Search"} />
                        </div>
                    </form>
                </header>
                <div className="contacts-list">
                    {contactsToRender.map((contact, index) => <ContactsItem key={index} contact={contact} />)}
                </div>
                {isShortened && inputText == "" &&
                    <footer className="transfer-to-contacts-footer">
                        <ShowAllButton onClickFunction={() => setIsShortened(false)} />
                    </footer>}
            </section>
        </main>
    )
}   