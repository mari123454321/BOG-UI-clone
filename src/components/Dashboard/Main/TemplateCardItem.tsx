import type { JSX } from "react"
import { useDarkMode } from "../../../context/DarkModeContext"

type TemplateItemType = {
    img: JSX.Element
    title: string
    subtext?: string
    navFunc?: () => void
}

export default function TemplateCardItem({ img, title, subtext, navFunc }: TemplateItemType) {
    const { darkMode } = useDarkMode()
    return (
        <div
            onClick={()=>navFunc && navFunc()}
            className="card-wrapper">
            <div className="card-item">
                <div className={`card-item-img ${darkMode && "dark"}`}>
                    {img}
                </div>
                <div className="card-item-text">
                    <h3 className={`card-item-title ${darkMode && "dark"}`}>
                        {title}
                    </h3>
                    {subtext &&
                        <span className={`card-item-subtext ${darkMode && "dark"}`}>
                            {subtext}
                        </span>}
                </div>
            </div>
        </div>

    )
}