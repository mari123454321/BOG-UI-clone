import { XIcon } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
export default function X({ size, dimentions, handleClick }: { size: number, dimentions: string, handleClick: () => void }) {
    const { darkMode } = useDarkMode()
    return (
        <button
            onClick={handleClick}
            style={{ width: `${dimentions}`, height: `${dimentions}` }}
            className={` x-btn ${darkMode ? "dark" : ""}`}>
            <XIcon size={size} className="icon-secondary" />
        </button>
    )
}