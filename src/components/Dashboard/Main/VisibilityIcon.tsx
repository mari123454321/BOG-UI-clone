import { Eye, EyeOff } from "lucide-react"
import { useDarkMode } from "../../../context/DarkModeContext"

type visibilityIconProps = {
    isVisible: boolean
    setIsVisible:React.Dispatch<React.SetStateAction<boolean>>
    fill?: boolean
}
export default function VisibilityIcon({isVisible, setIsVisible}:visibilityIconProps) {
    const {darkMode} = useDarkMode()

    return (
        <button
            className={`main-page-visibility-toggle ${darkMode ? "dark" : ""}`}
            onClick={() => setIsVisible(prev => !prev)}
        >
            {isVisible ? <Eye className="visibility-icon" width={16} height={16} /> : <EyeOff className="visibility-icon" width={16} height={16} />}
        </button>
    )
}