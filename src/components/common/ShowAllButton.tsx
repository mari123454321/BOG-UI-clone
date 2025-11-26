import { ChevronRight } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLanguage } from "../../context/LanguageContext";

type ShowAllButtonProps = {
    onClickFunction: () => void;
}
export default function ShowAllButton({onClickFunction }: ShowAllButtonProps) {
    const { darkMode } = useDarkMode()
    const { language } = useLanguage()
    return (
        <button
            onClick={() => onClickFunction()}
            className={`show-more-button ${darkMode ? "dark" : ""}`}>
            <ChevronRight color="#ff6c1d" width={16} height={16} />
            <span className={`show-more-button-title ${language === "Eng" ? "eng" : ""}`}>
                {language === "Geo" ? "ყველას ნახვა" : "SHOW ALL"}
            </span>
        </button>
    )
}