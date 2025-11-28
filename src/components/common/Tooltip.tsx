import type { ReactElement } from "react"
import { useDarkMode } from "../../context/DarkModeContext"

type TooltipChildrenProps = { 
    children: ReactElement
    text: string
}

export default function Tooltip({children, text}:TooltipChildrenProps){
    const {darkMode} = useDarkMode()
    
    return(
        <div className={`tooltip-container ${darkMode ? "dark" : ""}`}>
            <div className="tooltip-children">
                {children}
                <div className="tooltip">
                    <span>{text}</span>
                </div>
            </div>
        </div>
    )
}